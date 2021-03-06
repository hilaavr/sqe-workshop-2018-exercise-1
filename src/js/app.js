import $ from 'jquery';
import {parseCode, parseCodeTable} from './code-analyzer';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        $('#parsedCode').html(parsedCode);

        $('#resultTable').html(parseCodeTable(codeToParse));

        //$('#parsedCode').val(parsedCode);
    });
});
