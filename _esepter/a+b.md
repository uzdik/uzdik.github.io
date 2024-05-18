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
                  <option value="A" data-memory-limit="100" data-time-limit="0,25" data-input-file="" data-output-file="">
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
                <span class="notice for__submittedProblemIndex">&nbsp;</span>
                <span id="submittedProblemFiles" class="" style="float: left;">стандартный ввод/вывод</span>
                <span id="submittedProblemLimits" class="" style="float: right;">0,25 с, 100 МБ</span>
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
              <div><span class="programTypeNotice notice smaller"></span></div>
              <div class="outputOnlyProgramTypeIdNotice">ZIP</div>
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
