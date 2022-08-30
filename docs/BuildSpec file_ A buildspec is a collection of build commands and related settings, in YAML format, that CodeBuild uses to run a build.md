<!-- Output copied to clipboard! -->

<!-- You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 11 -->

Edit

<h2>**Getting started with AWS CodeBuild using the buildspec file.**</h2>


**Steps:**

**Step 1: Create the source code**

In order to create and deploy the build we must have the source code. We already have created source code which was uploaded on ‘[github repository](https://github.com/Tech9Apps/elevation-curb.git)’. We just need to integrate that code to the AWS code build project. 

**Step 2: Create the buildspec file**

**_BuildSpec file_**: A _buildspec_ is a collection of build commands and related settings, in YAML format, that CodeBuild uses to run a build. Without a build spec, CodeBuild cannot successfully convert your build input into build output or locate the build output artifact in the build environment to upload to your output bucket.

Steps to create build spec file for the project

  

Now we already have the source code placed in the GitHub repository we just need to create the buildspec file and place it in our repository. For EC source code we are placidg this file at this path in github repository _/nework/buildpec.yml_

**Step 3: Create the build project**

For creating Build Project follow the screenshots below.



1. From your AWS search function search for codebuild


![alt_text](images/create-source-code.png "image_tooltip")

2. Select Build Projects
   
![alt_text](images/select-build-projects.png "image_tooltip")

3. Select Create Proejct

    
![alt_text](images/create-build-project.png "image_tooltip")


4. Give Project Name , Description as per the image below.

    
![alt_text](images/project-configuration.png "image_tooltip")


5. Select **Source Provider** as **‘Github’** from the drop down list
6. Select **Repository in my GitHub account** under Repository.
7. Select **Connect with a GitHub personal access token.**
8. Select **Generate github personal  access  token** and Save it.

    ***Note:*** To generate the personal access token [follow this link](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

9. After saving the token select the appropriate repository from the Github repository. In our case its ‘**elevation-curb’**
10. Put the **branch name** under Source Version.  In our case we are entering branch i.e **codebuild-test.**
    
![alt_text](images/select-source.png "image_tooltip")

11. Under Primary source webhook events section select the options as below

       11.1 **Webhook:** Check Rebuild every time a code change is pushed to this repository


       11.2 **Build Type:** Single Build


       11.3 **Event Type:** PUSH


       11.4 **Start a build under these conditions/HEAD_REF optional:** codebuild-test

![alt_text](images/webhook-events.png "image_tooltip")



12. Under Environment section select the options as below
      
      12.1 **Environment Image:** Managed Image

      12.2  **Operating System:** Ubuntu

      12.3 **Runtime:** Standard

      12.4 **Image:** aws/codebuild/standard:6.0

      12.5 **Image Version:** Always use the Lates Image for this runtime version

      12.6 **Environment Type:** Linux

      12.7 **Service Role:** New Service Role

    Note: When you select New service role it will automatically appear under ‘Role Name’ field.


    
![alt_text](images/environment.png "image_tooltip")


13. Under **Buildpec **section select the options as below

      13.1 Build Specfications select ‘Use a buildspec file

      13.2 Buildspec Name: buildspec/buildspec.yml   
![alt_text](images/buildspec.png "image_tooltip")



14. At the very  bottom Click on Create build Project button 
![alt_text](images/build-project-button.png "image_tooltip")


We are done with configuring the build project. Now its time to actually build the project.

Steps: 

There are two ways of triggering the build 


 
1. From Aws code build console. 
2. By pushing the code to the github repository.

1.Lets see how we can trigger build from the AWS code build console.



1.    Navigate to the**Aws code build**
2.    Expand**Build section**
3.    Select Build Projects > Choose project name
4.    Click on **‘Start Button’** at the top right hand corner.

2. Push the code to the github repo on **‘codebuild-test’** branch it will automatically trigger the build since we have configured this in the step 11.



Important Tips: 

You can track the build process through out the different phases from the **Phase details**  field. 
![alt_text](images/phase-details.png "image_tooltip")


Also, You can track the build logs from the ‘**Build Logs**’ field
![alt_text](images/build-logs.png "image_tooltip")


References: [https://docs.aws.amazon.com/codebuild/latest/userguide/getting-started.html](https://docs.aws.amazon.com/codebuild/latest/userguide/getting-started.html) \
[https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html)

   


                               
