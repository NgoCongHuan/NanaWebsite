$(document).ready(function() {

    $(".select-cuahang option[value='dian']").hide();
    $(".select-cuahang option[value='bienhoa']").hide();

    $(".select-tinh").change(function() {
        if ($(".select-tinh").val() == "binhduong") {
            $(".select-cuahang option[value='dian']").show();
            $(".select-cuahang option[value='bienhoa']").hide();
        }
        else if ($(".select-tinh").val() == "dongnai") {
            $(".select-cuahang option[value='dian']").hide();
            $(".select-cuahang option[value='bienhoa']").show();
        }
        else if ($(".select-tinh").val() == "all"){
            $(".select-cuahang option[value='dian']").hide();
            $(".select-cuahang option[value='bienhoa']").hide();
        }
    });

    $(".button").click(function(){
        $("html, body").animate({ scrollTop: 80 }, "slow");
        $("#thanks").show();
        $("#thanks").fadeOut(4000);
    })
})

