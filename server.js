const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const FormData = require('form-data');
const qs = require('querystring');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const CODEFORCES_LOGIN_URL = 'https://codeforces.com/enter';
const CODEFORCES_SUBMIT_URL = 'https://codeforces.com/gym/515622/submit';

app.post('/submit', async (req, res) => {
    const { handleOrEmail, password, problemIndex, programTypeId, sourceFileContent } = req.body;

    try {
        // Step 1: Log in to Codeforces
        let response = await axios.get(CODEFORCES_LOGIN_URL, { withCredentials: true });
        const cookies = response.headers['set-cookie'].join('; ');

        const csrfToken = response.data.match(/name="csrf_token" value="(.*?)"/)[1];
        const ftaa = response.data.match(/name="ftaa" value="(.*?)"/)[1];
        const bfaa = response.data.match(/name="bfaa" value="(.*?)"/)[1];

        const loginData = qs.stringify({
            handleOrEmail,
            password,
            csrf_token: csrfToken,
            action: 'enter',
        });

        response = await axios.post(CODEFORCES_LOGIN_URL, loginData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Cookie: cookies,
            },
            withCredentials: true,
        });

        if (response.status !== 302) {
            return res.status(400).send('Login failed');
        }

        // Step 2: Submit the solution
        const submitData = new FormData();
        submitData.append('csrf_token', csrfToken);
        submitData.append('ftaa', ftaa);
        submitData.append('bfaa', bfaa);
        submitData.append('action', 'submitSolutionFormSubmitted');
        submitData.append('submittedProblemIndex', problemIndex);
        submitData.append('programTypeId', programTypeId);
        submitData.append('sourceFile', sourceFileContent);

        response = await axios.post(CODEFORCES_SUBMIT_URL, submitData, {
            headers: {
                Cookie: cookies,
                ...submitData.getHeaders(),
            },
            withCredentials: true,
        });

        if (response.status === 200) {
            res.send('Submission successful!');
        } else {
            res.status(400).send('Submission failed');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
