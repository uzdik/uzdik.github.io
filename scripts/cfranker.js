const GOOGLE_SHEET_ID = '1SIlsyw2TQCRncQE3e62NUHAwECka4r-BIMk3fOMdvPw';
const API_KEY = 'AIzaSyAKNpyq8_8p6Xa-cUGXQbkiuLE8gmMidTQ';
const CLIENT_ID = '121913704201-vqbimf8adrto5vq8cf0s62f4d8n7cq6l.apps.googleusercontent.com'; 
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Google Sheets API
    gapi.load("client:auth2", () => {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPES
        });
    });

    // Add user functionality
    document.getElementById("addUserButton").addEventListener("click", () => {
        const newUsername = document.getElementById("newUsername").value.trim();
        if (newUsername) {
            appendRow(newUsername);
            document.getElementById("newUsername").value = ""; // Clear input
        }
    });

    // Create Update Rankings button
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update Rankings";
    updateButton.addEventListener("click", async () => {
        const users = await getSheetData();
        const updatedRanking = await fetchRanking(users);
        await updateSheet(updatedRanking);
        const last10Days = getLast10DaysRanking(updatedRanking);
        displayRanking(last10Days);
    });
    document.body.insertBefore(updateButton, document.body.querySelector("h1").nextSibling);
});

// Fetch rankings from Codeforces
async function fetchRanking(usernames) {
    const today = new Date();
    const formatDate = date => new Date(date.getTime() + 5 * 60 * 60 * 1000).toISOString().split("T")[0]; // Adjust for Almaty timezone
    const todayStr = formatDate(today);

    const ranking = [];
    for (const username of usernames) {
        try {
            const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
            const data = await response.json();
            if (data.status !== "OK") throw new Error("API Error");

            const solvedToday = new Set();
            const totalSolved = new Set();

            data.result.forEach(submission => {
                const submissionDate = new Date(submission.creationTimeSeconds * 1000).toISOString().split("T")[0];
                if (submission.verdict === "OK") {
                    totalSolved.add(submission.problem.name);
                    if (submissionDate === todayStr) {
                        solvedToday.add(submission.problem.name);
                    }
                }
            });

            ranking.push({
                username,
                today: solvedToday.size,
                totalSolved: totalSolved.size
            });
        } catch (error) {
            console.error(`Error fetching data for ${username}:`, error);
        }
    }
    return ranking;
}

// Display last 10 days' data
function displayRanking(ranking) {
    const rankingTable = document.getElementById("rankingTable");
    rankingTable.innerHTML = ranking.map(user => ` 
        <tr>
            <td>${user.username}</td>
            <td>${user.totalSolved}</td>
        </tr>
    `).join("");
}

// Get data from Google Sheet
async function getSheetData() {
    const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: "Sheet1!A:A"
    });
    return response.result.values.flat();
}

// Update Google Sheet with new rankings
async function updateSheet(ranking) {
    const today = new Date();
    const formatDate = date => new Date(date.getTime() + 5 * 60 * 60 * 1000).toISOString().split("T")[0]; // Adjust for Almaty timezone
    const todayStr = formatDate(today);

    const values = ranking.map(user => [user.username, user.today, user.totalSolved]);

    await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: "Sheet1",
        valueInputOption: "RAW",
        resource: {
            values: [[todayStr, "Today", "Total"]].concat(values)
        }
    });
}

// Helper: Get last 10 days' data
function getLast10DaysRanking(data) {
    return data.slice(-10); // Get the last 10 records from the ranking
}
