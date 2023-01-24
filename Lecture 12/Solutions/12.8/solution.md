1. Log into Azure Portal
2. Select **App Services** > *Create (+)*
3. In the *Basics* tab
    1. Select existing subscription & resource group
    2. Give the app a globally unique name (e.g. *jsc-random-api-1*)
    3. Select publish method *Code*
    4. Select runtime stack *Node 16 LTS*
    5. Select region *North Europe*
    6. Select SKU and size *Free F1 (1GB memory)*
4. In the *Review + create* tab
    1. Review
    2. Select *Create*
5. When the deployment is complete, open your project in VS Code
6. Log in to Azure from VS Code (if not already logged in)
7. Select Azure > (resource group) > App Services > jsc-random-api-1 (your unique name)
8. Right-click and select *Deploy to Web App*
9. Select correct folder
10. Confirm
11. After the project has deployed, visit https://jsc-random-api-1.azurewebsites.net to verify that everything works.
