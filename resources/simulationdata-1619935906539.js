function initData() {
  jimData.variables["RecipeDescription"] = "";
  jimData.variables["RecipeName"] = "";
  jimData.variables["InventoryName"] = "";
  jimData.variables["one"] = "1";
  jimData.variables["InventoryAmount"] = "";
  jimData.variables["InventoryImage"] = "none";
  jimData.variables["Inventory"] = "";
  jimData.variables["InventoryCatagory"] = "";
  jimData.datamasters["Inventory"] = [
    {
      "id": 1,
      "datamaster": "Inventory",
      "userdata": {
        "2fb450ac-ae2b-44c4-aaa7-adc0b599c625": "Bread Image",
        "4a7f71ed-ac2c-4c69-b92e-f2c394a4a397": "White Bread",
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "1",
        "7298c141-bcb4-4c8c-9d36-1d90859b0862": "Bread Baked Bakery"
      }
    },
    {
      "id": 2,
      "datamaster": "Inventory",
      "userdata": {
        "2fb450ac-ae2b-44c4-aaa7-adc0b599c625": "Eggs Image",
        "4a7f71ed-ac2c-4c69-b92e-f2c394a4a397": "Free range eggs",
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "12",
        "7298c141-bcb4-4c8c-9d36-1d90859b0862": "Eggs"
      }
    },
    {
      "id": 3,
      "datamaster": "Inventory",
      "userdata": {
        "2fb450ac-ae2b-44c4-aaa7-adc0b599c625": "Milk Image",
        "4a7f71ed-ac2c-4c69-b92e-f2c394a4a397": "Full cream milk",
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "1 Litre",
        "7298c141-bcb4-4c8c-9d36-1d90859b0862": "Dairy"
      }
    },
    {
      "id": 4,
      "datamaster": "Inventory",
      "userdata": {
        "2fb450ac-ae2b-44c4-aaa7-adc0b599c625": "Pepsi Image",
        "4a7f71ed-ac2c-4c69-b92e-f2c394a4a397": "Pepsi",
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "30",
        "7298c141-bcb4-4c8c-9d36-1d90859b0862": "Soda"
      }
    }
  ];

  jimData.datamasters["Recipe"] = [
    {
      "id": 1,
      "datamaster": "Recipe",
      "userdata": {
        "89615ab3-a0bc-4540-8a0c-65d16c9e4dc0": "French toast",
        "2759da66-896f-4f70-8b1a-41b548fdc680": "Eggs , Milk , Bread"
      }
    }
  ];

  jimData.isInitialized = true;
}