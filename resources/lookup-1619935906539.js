(function(window, undefined) {
  var dictionary = {
    "314e8bfc-2d4a-4752-8012-88068a6b86d0": "Item Added Page Scan",
    "c4caeac5-30be-43e7-be1d-fffe40708821": "Scan Page Add",
    "ebaeafd1-a29a-4b76-8fce-ea3e231b48de": "AddRecipe",
    "e9b63658-23a3-4eb9-998a-5210f87cee58": "Inventory",
    "8b243171-27fa-4ce7-8804-ad771d17dd0a": "Signup",
    "21147a72-76f5-4cc2-925b-8cbdfd94c7be": "Check Item Page",
    "39b96107-8d58-49f2-88b5-2461e4a6af7f": "AddRecipeConfirm",
    "80eba43f-9c17-4bc8-b210-17cf62b86716": "Scan Option Page",
    "ae3e4edd-0f5a-4b99-8714-3f2c84cd1733": "Scan Page Check",
    "addbe419-d9eb-4fb8-9561-cc8e3fffb16e": "BuyItems",
    "f5e76703-6575-4c28-a237-b5f5c28cb43d": "MyRecipes",
    "dcbf63ca-85e7-42d8-969b-58a8d2055551": "Item Added Page",
    "70d5b8e7-4878-41c9-a6b1-799e85c4d528": "Login",
    "46884e45-e1b3-4fa8-9f1f-6c58a763e060": "SuggestedRecipe",
    "01a00f24-2021-481f-bcab-e88b96d954fd": "Sent order",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Screen",
    "d7007b7e-9ab6-4246-881e-1535d8ee2945": "Manually Add",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);