## Create an Azure Function Project
1. Create a project folder
2. In VS Code, select Azure > Workspace > Add... > Create Function
3. Confirm new project creation to this folder
4. Select a language *javascript*
5. Select a template *HTTP trigger*
6. Provide a function name *random*
7. Select Authorization level *Anonymous*
8. Modify index.js
9. Test locally: Run and Debug > Start debugging

## Create an Azure Function App
1. In VS Code, select Azure > Resources > Function App 
2. Right-click > Create Function App in Azure...
3. Enter a globally unique name, e.g. *jsc-random-api-3*
4. Select a runtime stack *Node.js 16 LTS*
5. Select a location *North Europe*
6. Select existing resource group *buutti-js-cloud*

## Deploy the Project to the App
1. In VS Code, select Azure > Workspace > Deploy... > Deploy to Function App...
2. Select the function App *jsc-random-api-3*
3. Confirm deployment
