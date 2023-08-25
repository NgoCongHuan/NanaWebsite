$(document).ready(function(){

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

    $(".button-find").click(function() {
        if ($(".select-tinh").val() == "binhduong") {
            $(".binhduong-S").show();
            $(".binhduong-T").show();
            $(".dongnai-S").hide();
            $(".dongnai-T").hide();
        }

        if ($(".select-tinh").val() == "dongnai") {
            $(".binhduong-S").hide();
            $(".binhduong-T").hide();
            $(".dongnai-S").show();
            $(".dongnai-T").show();
        }

        if ($(".select-tinh").val() == "all") {
            $(".binhduong-S").show();
            $(".binhduong-T").show();
            $(".dongnai-S").show();
            $(".dongnai-T").show();
        }

        if ($(".select-vitri").val() == "sang") {
            $(".binhduong-S").show();
            $(".binhduong-T").hide();
            $(".dongnai-S").show();
            $(".dongnai-T").hide();
        }

        if ($(".select-vitri").val() == "toi") {
            $(".binhduong-S").hide();
            $(".binhduong-T").show();
            $(".dongnai-S").hide();
            $(".dongnai-T").show();
        }

        if ($(".select-vitri").val() == "sang" && $(".select-tinh").val() == "binhduong") {
            $(".binhduong-S").show();
            $(".binhduong-T").hide();
            $(".dongnai-S").hide();
            $(".dongnai-T").hide();
        }

        if ($(".select-vitri").val() == "toi" && $(".select-tinh").val() == "binhduong") {
            $(".binhduong-S").hide();
            $(".binhduong-T").show();
            $(".dongnai-S").hide();
            $(".dongnai-T").hide();
        }

        if ($(".select-vitri").val() == "sang" && $(".select-tinh").val() == "dongnai") {
            $(".binhduong-S").hide();
            $(".binhduong-T").hide();
            $(".dongnai-S").show();
            $(".dongnai-T").hide();
        }

        if ($(".select-vitri").val() == "toi" && $(".select-tinh").val() == "dongnai") {
            $(".binhduong-S").hide();
            $(".binhduong-T").hide();
            $(".dongnai-S").hide();
            $(".dongnai-T").show();
        }
    })
});