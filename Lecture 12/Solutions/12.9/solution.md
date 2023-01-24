## Dockerizing the app
1. Build the image `docker build -t jsc-random-api-2 .`
2. Run the container `docker run -e PORT=3000 -p 3000:3000 jsc-random-api-2`
3. Test the app `curl http://localhost:3000`
4. Tag the image `docker tag jsc-random-api-2 javascriptcloud.azurecr.io/jsc-random-api-2:latest`
5. Push the image `docker push javascriptcloud.azurecr.io/jsc-random-api-2:latest`

## Deploying to Azure
1. Log into Azure Portal
2. Select **App Services** > *Create (+)*
3. In the *Basics* tab
    1. Select existing subscription & resource group
    2. Give the app a globally unique name (e.g. *jsc-random-api-2*)
    3. Select publish method *Docker Container*
    5. Select region *North Europe*
    6. Select SKU and size *Free F1 (1GB memory)*
4. In the *Docker* tab
    1. Select Options *Single Container*
    2. Select Image source *Azure Container Registry*
    3. Select Registry *javascriptcloud*
    4. Select Image *jsc-random-api-2*
    5. Use default tag *latest*
4. In the *Review + create* tab
    1. Review
    2. Select *Create*
5. When the deployment is complete, visit https://jsc-random-api-2.azurewebsites.net to verify that everything works.
    * Remember that the deployment of a container takes a while!
