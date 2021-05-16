function initData() {
  jimData.variables["RecipeDescription"] = "";
  jimData.variables["RecipeName"] = "";
  jimData.variables["one"] = "1";
  jimData.variables["Store"] = "";
  jimData.variables["Product"] = "";
  jimData.variables["TotalBill"] = "";
  jimData.variables["Method"] = "";
  jimData.variables["InventoryImage"] = "none";
  jimData.variables["RecipeSteps"] = "";
  jimData.variables["InventoryName"] = "";
  jimData.variables["InventoryAmount"] = "";
  jimData.variables["InventoryCatagory"] = "";
  jimData.variables["Inventory"] = "";
  jimData.datamasters["Inventory"] = [
    {
      "id": 1,
      "datamaster": "Inventory",
      "userdata": {
        "2fb450ac-ae2b-44c4-aaa7-adc0b599c625": "Bread Image",
        "4a7f71ed-ac2c-4c69-b92e-f2c394a4a397": "White Bread",
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "2",
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
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "28",
        "7298c141-bcb4-4c8c-9d36-1d90859b0862": "Soda"
      }
    },
    {
      "id": 5,
      "datamaster": "Inventory",
      "userdata": {
        "2fb450ac-ae2b-44c4-aaa7-adc0b599c625": "Carrot Image",
        "4a7f71ed-ac2c-4c69-b92e-f2c394a4a397": "Carrot",
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "0",
        "7298c141-bcb4-4c8c-9d36-1d90859b0862": "Vegetable"
      }
    },
    {
      "id": 6,
      "datamaster": "Inventory",
      "userdata": {
        "2fb450ac-ae2b-44c4-aaa7-adc0b599c625": "Cookies Image",
        "4a7f71ed-ac2c-4c69-b92e-f2c394a4a397": "Cookies",
        "9c939b84-234c-4d3a-90ff-09426c4aa2b1": "0",
        "7298c141-bcb4-4c8c-9d36-1d90859b0862": "Biscuit"
      }
    }
  ];

  jimData.datamasters["Recipe"] = [
    {
      "id": 1,
      "datamaster": "Recipe",
      "userdata": {
        "89615ab3-a0bc-4540-8a0c-65d16c9e4dc0": "French toast",
        "2759da66-896f-4f70-8b1a-41b548fdc680": "Eggs , Milk , Bread",
        "9ec45deb-211f-4330-b504-c65a9dc220ef": "Mix eggs and milk in a bowl , Dunk the bread and heat in a pan."
      }
    },
    {
      "id": 2,
      "datamaster": "Recipe",
      "userdata": {
        "89615ab3-a0bc-4540-8a0c-65d16c9e4dc0": "Bannana Pancake",
        "2759da66-896f-4f70-8b1a-41b548fdc680": "Bannana , Eggs , Honey.",
        "9ec45deb-211f-4330-b504-c65a9dc220ef": "Mash a bannana , mix with eggs and cinnamon, heat in a pan for 3 - 4 minutes flipping half way through."
      }
    }
  ];

  jimData.datamasters["Products"] = [
    {
      "id": 1,
      "datamaster": "Products",
      "userdata": {
        "82f697cb-8390-407e-8c2b-15eaa5320358": "White Bread",
        "85d574de-6588-4757-8292-6d168c3558dd": "3.4",
        "31c0e5d5-382f-4af8-86de-34234e5f40fe": "./images/1f091025-beef-45a8-bd52-06fa401056fb.jpg"
      }
    },
    {
      "id": 2,
      "datamaster": "Products",
      "userdata": {
        "82f697cb-8390-407e-8c2b-15eaa5320358": "Pepsi 600ml",
        "85d574de-6588-4757-8292-6d168c3558dd": "3",
        "31c0e5d5-382f-4af8-86de-34234e5f40fe": "./images/8fe4d9f5-1c00-4bc1-9543-d17b1cb34139.jpg"
      }
    },
    {
      "id": 3,
      "datamaster": "Products",
      "userdata": {
        "82f697cb-8390-407e-8c2b-15eaa5320358": "Carrot Prepacked(1kg)",
        "85d574de-6588-4757-8292-6d168c3558dd": "2",
        "31c0e5d5-382f-4af8-86de-34234e5f40fe": "./images/bb4fc4e5-7791-4993-ba0b-8174dd87bced.jpg"
      }
    },
    {
      "id": 4,
      "datamaster": "Products",
      "userdata": {
        "82f697cb-8390-407e-8c2b-15eaa5320358": "Cookies",
        "85d574de-6588-4757-8292-6d168c3558dd": "4.5",
        "31c0e5d5-382f-4af8-86de-34234e5f40fe": "./images/351846e3-d8b3-48e6-bfd4-f750547e428a.jpg"
      }
    }
  ];

  jimData.isInitialized = true;
}