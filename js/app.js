$("#nftdesign").on("click", function () {
  $(".nftdesignmodal").show();
});
$("#nftsmartcontract").on("click", function () {
  $(".nftsmartcontractmodal").show();
});
$("#nftwallet").on("click", function () {
  $(".nftwalletmodal").show();
});
$("#etherblockchain").on("click", function () {
  $(".etherblockchainmodal").show();
});
$("#solanbcha").on("click", function () {
  $(".solanbchamodal").show();
});
$("#marketinggrowth").on("click", function () {
  $(".marketinggrowthamodal").show();
});
$("#communitymgmt").on("click", function () {
  $(".communitymgmtmodal").show();
});
$("#contentprep").on("click", function () {
  $(".contentprepmodal").show();
});
$("#designnft2").on("click", function () {
  $(".designnft2modal").show();
});

$(".btn-close").on("click", function () {
  $(".modal").hide();
});

$("body").click(function (event) {
  if (
    !$(event.target).closest("#designnft2").length &&
    !$(event.target).is("#designnft2")
  ) {
    $(".designnft2modal").hide();
  }
   if (
     !$(event.target).closest("#contentprep").length &&
     !$(event.target).is("#contentprep")
   ) {
     $(".contentprepmodal").hide();
   }
     if (
       !$(event.target).closest("#communitymgmt").length &&
       !$(event.target).is("#communitymgmt")
     ) {
       $(".communitymgmtmodal").hide();
     }
      if (
        !$(event.target).closest("#marketinggrowth").length &&
        !$(event.target).is("#marketinggrowth")
      ) {
        $(".marketinggrowthamodal").hide();
      }
       if (
         !$(event.target).closest("#solanbcha").length &&
         !$(event.target).is("#solanbcha")
       ) {
         $(".solanbchamodal").hide();
       }
        if (
          !$(event.target).closest("#etherblockchain").length &&
          !$(event.target).is("#etherblockchain")
        ) {
          $(".etherblockchainmodal").hide();
        }
         if (
           !$(event.target).closest("#nftwallet").length &&
           !$(event.target).is("#nftwallet")
         ) {
           $(".nftwalletmodal").hide();
         }
          if (
            !$(event.target).closest("#nftsmartcontract").length &&
            !$(event.target).is("#nftsmartcontract")
          ) {
            $(".nftsmartcontractmodal").hide();
          }
           if (
             !$(event.target).closest("#nftdesign").length &&
             !$(event.target).is("#nftdesign")
           ) {
             $(".nftdesignmodal").hide();
           }

          
});

