

function SplitFunction(position){
    let quantity;
    let code;
    let Qindex = $("#splitIndex").val();
    let Qnumber =$("#splitNumber").val();



    if($("#split option:selected").val()==='quantity')
    {
        quantity='-quantity'

        code="\n\t\t<process>\n" +
            "\t\t\t<position>"+position+"</position>\n" +
            "\t\t\t<script>split"+quantity+".pl</script>\n" +
            "\t\t\t<quantity>"+Qnumber+"</quantity>\n" +
            "\t\t\t<oldpart>[append]</oldpart>\n" +
            "\t\t\t<newpart>_[index]</newpart>\n" +
            "\t\t</process>"

    }else if ($("#split option:selected").val()==='field') {

        code="\n\t\t<process>\n" +
             "\t\t\t<position>"+position+"</position>\n" +
             "\t\t\t<script>split.pl</script>\n" +
             "\t\t\t<files>\n" +
             "\t\t\t\t<file>\n" +
             "\t\t\t\t\t<xpath>(logic)</xpath>\n" +
             "\t\t\t\t\t<filename>\n" +
             "\t\t\t\t\t\t<oldpart>[append]</oldpart>\n" +
             "\t\t\t\t\t\t<newpart>(index)</newpart>\n" +
             "\t\t\t\t\t</filename>\n" +
             "\t\t\t\t</file>\n" +
             "\t\t\t\t<file>\n" +
             "\t\t\t\t\t<xpath>(logic2)</xpath>\n" +
             "\t\t\t\t\t<filename>\n" +
             "\t\t\t\t\t\t<oldpart>[append]</oldpart>\n" +
             "\t\t\t\t\t\t<newpart>(index)</newpart>\n" +
             "\t\t\t\t\t</filename>\n" +
             "\t\t\t\t</file>\n" +
             "\t\t</process>"
    }
    return code;
}