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
    <form class="submit-form" method="post" action="?csrf_token=254d3535d1759ddb110915c932649d6e" enctype="multipart/form-data">
      <input type="hidden" name="csrf_token" value="254d3535d1759ddb110915c932649d6e">
      <input type="hidden" name="ftaa" value="">
      <input type="hidden" name="bfaa" value="">
      <input type="hidden" name="action" value="submitSolutionFormSubmitted">
      
      <table class="table-form" style="width: 90%;">
        <tbody>
          <tr>
            <td class="field-name">Задача:</td>
            <td>
              <label style="width: 300px; margin: 0;padding: 0;">
                <select style="width: 300px;" name="submittedProblemIndex">
                  <option value="A" data-memory-limit="100" data-time-limit="0,25" data-input-file="" data-output-file="" selected>
                    A - Ал, бастадық!
                  </option>
                </select>
              </label>
            </td>
          </tr>
          
          <tr class="subscription-row">
            <td>&nbsp;</td>
            <td>
              <div class="shiftUp error__submittedProblemIndex" style="width: 300px;">
                <span class="error for__submittedProblemIndex" style="display: none;">&nbsp;</span>
              </div>
            </td>
          </tr>
          
          <tr>
            <td class="field-name">Язык:</td>
            <td>
              <select style="width: 300px;" name="programTypeId">
                <option value="31">Python 3.8.10</option>
                <option value="41">PyPy 3.6.9 (7.3.0)</option>
                <option value="70" selected="selected">PyPy 3.10 (7.3.15, 64bit)</option>
              </select>
            </td>
          </tr>
          
          <tr class="programSourceTr">
            <td class="field-name">Исходный код:</td>
            <td style="padding-bottom: 0.7em;" class="aceEditorTd">
              <textarea hidden="true" id="sourceCodeTextarea" name="source" style="box-sizing: border-box; width: 100%; height: 370px; display: none;"></textarea>
              <div id="editor" class="aceSupportsSafeFormsLeave ace_editor ace-chrome" style="box-sizing: border-box; width: 100% !important; height: 370px; border: 1px solid rgb(170, 170, 170); display: block;">
                <textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="none" spellcheck="false" style="opacity: 0; height: 16px; width: 7.2px; left: 45px; top: 0px;"></textarea>
                <div class="ace_gutter">
                  <div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 400px; width: 41px;">
                    <div class="ace_gutter-cell " style="height: 16px;">1</div>
                  </div>
                  <div class="ace_gutter-active-line" style="top: 0px; height: 16px;"></div>
                </div>
              </div>
              <input type="checkbox" id="toggleEditorCheckbox">
              <label style="font-size: 1.2rem; margin-left: 1em;" for="toggleEditorCheckbox" class="toggleEditorCheckboxLabel">Отключить редактор</label>
              <div class="small tabSizeDiv" style="float: right; margin-top: 0.2em;">
                <label for="tabSizeInput" style="margin-right: 1em;">Размер таба:</label>
                <input style="width:3em;" type="number" id="tabSizeInput" name="tabSize" value="4">
              </div>
            </td>
          </tr>
          
          <tr>
            <td class="field-name">Или выберите файл:</td>
            <td>
              <input name="sourceFile" type="file" value="">
            </td>
          </tr>
          
          <tr>
            <td colspan="2">
              <div style="text-align: center;">
                <div style="display: inline-block; position: relative;">
                  <input class="submit" type="submit" id="singlePageSubmitButton" value="Отослать">
                  <img class="ajax-loading-gif" src="//codeforces.org/s/72623/images/ajax-loading-24x24.gif">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <input type="hidden" name="_tta" value="455">
    </form>
  </div>
</details>

<script type="text/javascript">
  var extensionMap = {
    "7": "program.py",
    "31": "a.py",
    "40": "a.py",
    "41": "a.py",
    "70": "a.py",
  };

  $(function() {
    $("#editor").css("display", "block");
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.setShowPrintMargin(false);
    editor.setOptions({
      enableBasicAutocompletion: true,
      tabSize: parseInt($("#tabSizeInput").val())
    });

    var modelist = ace.require("ace/ext/modelist");
    function setAceMode() {
      var filePath = extensionMap[$("select[name=programTypeId]").val()];
      var mode = modelist.getModeForPath(filePath).mode;
      editor.session.setMode(mode);
    }
    setAceMode();
    $("select[name=programTypeId]").change(function() {
      setAceMode();
    });

    editor.getSession().on('change', function() {
      $("#sourceCodeTextarea").val(editor.getValue());
    });

    $("#sourceCodeTextarea").change(function() {
      editor.setValue($(this).val(), 1);
    });

    function hideShowEditor() {
      if ($("#toggleEditorCheckbox").is(":checked")) {
        $("#editor").hide();
        $("#sourceCodeTextarea").show();
        $(".tabSizeDiv").hide();
      } else {
        $("#editor").show();
        editor.setValue(editor.getValue());
        $("#sourceCodeTextarea").hide();
        $(".tabSizeDiv").show();
      }
    }

    $("#toggleEditorCheckbox").change(function () {
      hideShowEditor();
      var editorEnabled = !$(this).is(":checked");

      $.post("/data/customtest", { communityCode: "", action: "setEditorEnabled", editorEnabled: editorEnabled }, function(response) {
        // No operations.
      });

      return false;
    });

    $("#tabSizeInput").change(function () {
      var tabSize = $(this).val();
      editor.setOptions({
        tabSize: tabSize
      });

      $.post("/data/customtest", { communityCode: "", action: "setTabSize", tabSize: tabSize }, function(response) {
        // No operations.
      });
    });

    hideShowEditor();
  });
</script>

<script type="text/javascript">
  $(document).ready(function () {
    $("select[name=submittedProblemIndex]").change(function () {
      let problemIndex = $(this).val();
      $(".next-available-submission-time").hide();
      if (problemIndex !== "") {
        $(".next-available-submission-time.for-problem-" + problemIndex).show();
      }
    });

    function updateFilesAndLimits() {
      if ("false" === "true") {
        return;
      }

      var problemFiles = $("#submittedProblemFiles");
      var problemLimits = $("#submittedProblemLimits");

      var problemIndex = $("select[name=submittedProblemIndex]").val();
      var option = $("select[name=submittedProblemIndex] option:selected");

      var timeLimit = option.attr("data-time-limit");
      var memoryLimit = option.attr("data-memory-limit");
      var inputFile = option.attr("data-input-file");
      var outputFile = option.attr("data-output-file");

      if (problemIndex == "") {
        problemFiles.text("");
        problemLimits.text("");
      } else {
        var filesStyle = "float: left; font-weight: bold";
        if (inputFile == "") {
          if (outputFile == "") {
            filesStyle = "float: left;";
            problemFiles.text("стандартный ввод/вывод");
          } else {
            problemFiles.text("стандартный ввод / " + outputFile);
          }
        } else {
          if (outputFile == "") {
            problemFiles.text(inputFile + " / стандартный вывод")
          } else {
            problemFiles.text(inputFile + " / " + outputFile);
          }
        }

        problemFiles.attr("style", filesStyle);
        problemLimits.text(timeLimit + " с, " + memoryLimit + " МБ");
      }
    }

    function updateSubmitButtonState() {
      var problemIndex = $("select[name=submittedProblemIndex]").val();

      updateFilesAndLimits();
      if (problemIndex == "") {
        $(".submit-form :submit").attr("disabled", "disabled");
      } else {
        $(".submit-form :submit").removeAttr("disabled");
      }
    }

    $("select[name=submittedProblemIndex]").bind('change', updateSubmitButtonState);
    $("select[name=submittedProblemIndex]").bind('keypress', updateSubmitButtonState);
    $("select[name=submittedProblemIndex]").bind('blur', updateSubmitButtonState);
    $("select[name=submittedProblemIndex]").bind('input', updateSubmitButtonState);
    updateSubmitButtonState();
  });
</script>

<script type="text/javascript">
  $(function() {
    window._ftaa = "f4jhs2j1sy2uakeovi";
  })
</script>

<script type="text/javascript">
  $(function() {
    window._bfaa = "a30d473fd410d93f2bd818a2fe00adb9";
  });
</script>

<script>
  $(function () {
    function adjustNotice(programTypeId) {
      var $programTypeNotice = $(".programTypeNotice");
      $programTypeNotice.text("");
      if (programTypeId === 7 || programTypeId === 31) {
        $programTypeNotice.text("Почти всегда, если отсылать решения на PyPy, то они работают значительно быстрее");
      }
    }

    adjustNotice(31);

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
