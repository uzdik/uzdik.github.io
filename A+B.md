---
layout: esep
title: "A + B"
link: "https://codeforces.com/gym/515622/problem/A"
---
<div class="problem-statement">
  <div class="header">
    <div class="time-limit">Уақыт шектеуі: 0.25 сек</div>
    <div class="memory-limit">Жады шектеуі: 100 Мб</div>
  </div>
  <div>
    <p>Сізге кез келген бүтін <span class="tex-span"><i>a</i></span> мен <span class="tex-span"><i>b</i></span> сандары берілген, солардың қосындысын шығарыңыз.</p>
  </div>
  <div class="input-specification">
    <div class="section-title">Кіріс</div>
    <p>Екі жолда екі мән беріледі. (<span class="tex-span">|<i>a</i>, <i>b</i>| ≤ 10<sup class="upper-index">12</sup></span>)</p>
  </div>
  <div class="output-specification">
    <div class="section-title">Шығыс</div>
    <p>Солардың қосындысын шығарыңыз.</p>
  </div>
  <div class="sample-tests">
    <div class="section-title">Мысал(дар)</div>
    <div class="sample-test">
      <div class="input">
        <div class="title">Кіріс
          <div class="input-output-copier" data-clipboard-target="#id0046439594682860674" id="id007047348206762296" title="Copy"></div>
        </div>
        <pre id="id0046439594682860674">2
3
</pre>
      </div>
      <div class="output">
        <div class="title">Шығыс
          <div class="input-output-copier" data-clipboard-target="#id003922295155396216" id="id004025783199168731" title="Copy"></div>
        </div>
        <pre id="id003922295155396216">5
</pre>
      </div>
      <div class="input">
        <div class="title">Кіріс
          <div class="input-output-copier" data-clipboard-target="#id005796662080164809" id="id003856636964792197" title="Copy"></div>
        </div>
        <pre id="id005796662080164809">10
-5
</pre>
      </div>
      <div class="output">
        <div class="title">Шығыс
          <div class="input-output-copier" data-clipboard-target="#id00534685193674715" id="id0020113585570320947" title="Copy"></div>
        </div>
        <pre id="id00534685193674715">5
</pre>
      </div>
    </div>
  </div>
  <div class="note">
    <div class="section-title">Қосымша</div>
    <p>1-мысалда. Бірінші жолда 2, екінші жолда 3 берілді, нәтижеге 5 шықты.</p>
    <p>2-мысалда. Бірінші жолда 10, екінші жолда -5 берілді, нәтижеге 5 шықты.</p>
  </div>
</div>

<details>
  <summary style="font-size: 24px;">SUBMIT CODE</summary>
  <div class="content">
    <form class="submit-form" method="post" action="https://codeforces.com/gym/515622/submit?csrf_token=254d3535d1759ddb110915c932649d6e" enctype="multipart/form-data">
      <input type="hidden" name="csrf_token" value="254d3535d1759ddb110915c932649d6e">
      <input type="hidden" name="ftaa" value="uydp03ie9n4emqmq0a">
      <input type="hidden" name="bfaa" value="597a1b035924636765919e85498832b6">
      <input type="hidden" name="action" value="submitSolutionFormSubmitted">
      <label for="sourceFile">Исходный код:</label>
      <input id="sourceFile" name="sourceFile" type="file" value="">
      <input class="submit" type="submit" id="submitSolutionForm" value="Отослать">
    </form>
  </div>
</details>

<script type="text/javascript">
$(document).ready(function () {
    $("select[name=submittedProblemIndex]").val("A");
    $("select[name=programTypeId]").val("70");
});
</script>

<script>
        $(function () {
            const $submittedProblemIndex = $("select[name='submittedProblemIndex']");

            function adjustSubmittedProblemIndex() {
                const index = $submittedProblemIndex.val();
                const outputOnlyIndices = [];
                const outputOnly = outputOnlyIndices.indexOf(index) >= 0;
                if (outputOnly) {
                    $submittedProblemIndex.closest(".submit-form").addClass("output-only");
                } else {
                    $submittedProblemIndex.closest(".submit-form").removeClass("output-only");
                }
            }


            $submittedProblemIndex.change(function () {
                adjustSubmittedProblemIndex();
            });

            adjustSubmittedProblemIndex();

            $("select[name='programTypeId']").change(function () {
                adjustNotice(parseInt($(this).val()));
            });

            $(".submit-form, .submitForm").submitOnce(function () {
                var form = $(this);
                var $ftaa = form.find("input[name='ftaa']");
                var $bfaa = form.find("input[name='bfaa']");

                if (window._ftaa && window._bfaa) {
                    $ftaa.val(window._ftaa);
                    $bfaa.val(window._bfaa);
                }

                if (form.attr("enctype") === "multipart/form-data") {
                    var sourceFiles = form.find(".table-form input[name=sourceFile]");

                    if (sourceFiles.length === 1 && sourceFiles[0].files && sourceFiles[0].files.length === 0) {
                        form.removeAttr("enctype");
                    }
                }

                return true;
            });
        });
    </script>
