function mailsort(position){

    let additional
    let extend
    if($("#mailsort option:selected").val()==='10 fields'){

        additional = "\t\t\t\t<field>\n" +
                     "\t\t\t\t\t<position>9</position>\n" +
                     "\t\t\t\t\t<xpath>address7</xpath>\n" +
                     "\t\t\t\t</field>\n" +
                     "\t\t\t\t<field>\n" +
                     "\t\t\t\t\t<position>10</position>\n" +
                     "\t\t\t\t\t<xpath>address8</xpath>\n" +
                     "\t\t\t\t</field>\n";
        extend = ' 8 ';
    } else {
        additional='';
        extend='';
    }

   let code="\n\t\t<process>" +
        "\n\t\t\t<position>"+position+"</position>\n" +
        "\t\t\t<script>pre-mailsort.pl</script>\n" +
        "\t\t\t<delimiter>|</delimiter>\n" +
        "\t\t\t<template>TNT DSA"+ extend+ "Mailmark W</template>\n" +
        "\t\t\t<fields>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>1</position>\n" +
        "\t\t\t\t\t<xpath>urn</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>2</position>\n" +
        "\t\t\t\t\t<xpath>uuid</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>3</position>\n" +
        "\t\t\t\t\t<xpath>address1</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>4</position>\n" +
        "\t\t\t\t\t<xpath>address2</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>5</position>\n" +
        "\t\t\t\t\t<xpath>address3</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>6</position>\n" +
        "\t\t\t\t\t<xpath>address4</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>7</position>\n" +
        "\t\t\t\t\t<xpath>address5</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>8</position>\n" +
        "\t\t\t\t\t<xpath>address6</xpath>\n" +
        "\t\t\t\t</field>\n" +
        additional+
        "\t\t\t</fields>\n" +
        "\t\t</process>\n" +
        "\t\t<process>\n" +
        "\t\t\t<position>"+(position +1) +"</position>\n" +
        "\t\t\t<script>Matchcode</script>\n" +
        "\t\t</process>\n" +
        "\t\t<process>\n" +
        "\t\t\t<position>"+(position +2) +"</position>\n" +
        "\t\t\t<script>Sortcode</script>\n" +
        "\t\t</process>\n" +
        "\t\t<process>\n" +
        "\t\t\t<position>"+(position +3) +"</position>\n" +
        "\t\t\t<script>post-mailsort.pl</script>\n" +
        "\t\t\t<delimiter>|</delimiter>\n" +
        "\t\t\t<template>TNT DSA"+ extend +" Mailmark W</template>\n" +
        "\t\t\t<fields>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>1</position>\n" +
        "\t\t\t\t\t<xpath>urn</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>2</position>\n" +
        "\t\t\t\t\t<xpath>uuid</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>3</position>\n" +
        "\t\t\t\t\t<xpath>address1</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>4</position>\n" +
        "\t\t\t\t\t<xpath>address2</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>5</position>\n" +
        "\t\t\t\t\t<xpath>address3</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>6</position>\n" +
        "\t\t\t\t\t<xpath>address4</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>7</position>\n" +
        "\t\t\t\t\t<xpath>address5</xpath>\n" +
        "\t\t\t\t</field>\n" +
        "\t\t\t\t<field>\n" +
        "\t\t\t\t\t<position>8</position>\n" +
        "\t\t\t\t\t<xpath>address6</xpath>\n" +
        "\t\t\t\t</field>\n" +
        additional+
        "\t\t\t</fields>\n" +
        "\t\t</process>"

    return code

}