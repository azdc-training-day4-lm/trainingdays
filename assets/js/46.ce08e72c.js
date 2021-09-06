(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{757:function(e,t,a){e.exports=a.p+"assets/img/401-swagger-contacts.26cd5589.png"},758:function(e,t,a){e.exports=a.p+"assets/img/tokenechoserver-redirecturl.5aa26122.png"},759:function(e,t,a){e.exports=a.p+"assets/img/permission-request.63f0cb0a.png"},760:function(e,t,a){e.exports=a.p+"assets/img/swagger-authorize.598672ae.png"},893:function(e,t,a){"use strict";a.r(t);var s=a(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"challenge-3-integrate-azure-ad-into-the-scm-contacts-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-3-integrate-azure-ad-into-the-scm-contacts-api"}},[e._v("#")]),e._v(" Challenge 3: Integrate Azure AD into the SCM Contacts API")]),e._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),s("ul",[s("li",[e._v("Create Azure AD's client and server applications to integrate Azure AD into the SCM Contacts API")]),e._v(" "),s("li",[e._v("Configure and deploy the SCM Contacts API to Azure with Azure AD integration")])]),e._v(" "),s("p",[e._v("In the previous challenges you have learned some basics about the OpenID Connect and OAuth2 flows. You have seen how you can sign in users and how to acquire an access token for an Azure AD's protected resource. In this challenge we will integrate Azure AD into the SCM Contacts API step by step. Of course we will use Azure Pipelines to build and deploy the SCM Contacts API to Azure.")]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#create-the-azure-ad-client-and-server-application"}},[e._v("Create the Azure AD Client and Server Application")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#validate-the-applications-in-azure-ad"}},[e._v("Validate the Applications in Azure AD")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#protect-scm-contacts-api-with-azure-ad"}},[e._v("Protect SCM Contacts API with Azure AD")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#validate-the-scm-contacts-api"}},[e._v("Validate the SCM Contacts API")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#pull-request"}},[e._v("Pull Request")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])])]),e._v(" "),s("h2",{attrs:{id:"create-the-azure-ad-client-and-server-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-azure-ad-client-and-server-application"}},[e._v("#")]),e._v(" Create the Azure AD Client and Server Application")]),e._v(" "),s("p",[e._v("In "),s("RouterLink",{attrs:{to:"/day5/challenges/challenge-2.html"}},[e._v("Challenge 2")]),e._v(" you have already seen how to create an Azure AD client application to sign in users and how to create an API application that exposes OAuth2 permissions. We have to do the same for the sample application.")],1),e._v(" "),s("p",[e._v("There is already a script available in the repository to create both applications for you. It is located here: "),s("a",{attrs:{href:"../apps/infrastructure/scripts/aad-integration.sh"}},[e._v("day5/apps/infrastructure/scripts/aad-integration.sh")]),e._v(". You need to run it in a bash/Shell environment)")]),e._v(" "),s("p",[e._v("The script creates the server application first and then the client application for the sample application. It also uses a "),s("a",{attrs:{href:"../apps/infrastructure/scripts/oauth2-permissions.json"}},[e._v("oauth2-permissions.json")]),e._v(" file where all needed OAuth2 permission are defined.")]),e._v(" "),s("h3",{attrs:{id:"run-the-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-script"}},[e._v("#")]),e._v(" Run the script")]),e._v(" "),s("p",[e._v("Open a shell, use Azure CLI to connect to the Azure AD Tenant where you want to create the applications (you can also use the Azure Cloud Shell). If you have created a new Azure AD that is not linked to an Azure subscription, add the additional option "),s("em",[e._v("--allow-no-subscription")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az login --allow-no-subscription\n")])])]),s("p",[e._v("You must run the script twice:")]),e._v(" "),s("ul",[s("li",[e._v("once for creating the applications for the "),s("code",[e._v("Development")]),e._v(" stage")]),e._v(" "),s("li",[e._v("once for creating the applications for the "),s("code",[e._v("Testing")]),e._v(" stage")])]),e._v(" "),s("p",[e._v("Use the following parameters to run the script for the "),s("code",[e._v("Development")]),e._v(" stage:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("em",[e._v("API-APP-NAME")])]),e._v(" "),s("td",[e._v("scmapi-dev")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("API-APP-URI")])]),e._v(" "),s("td",[e._v("http://scmapi-dev")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("UI-APP-NAME")])]),e._v(" "),s("td",[e._v("scmfe-dev")])])])]),e._v(" "),s("p",[e._v("Use the following parameter for the "),s("code",[e._v("Testing")]),e._v(" stage:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("em",[e._v("API-APP-NAME")])]),e._v(" "),s("td",[e._v("scmapi-test")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("API-APP-URI")])]),e._v(" "),s("td",[e._v("http://scmapi-test")])]),e._v(" "),s("tr",[s("td",[s("em",[e._v("UI-APP-NAME")])]),e._v(" "),s("td",[e._v("scmfe-test")])])])]),e._v(" "),s("p",[e._v("Navigate to the directory "),s("a",{attrs:{href:"../apps/infrastructure/scripts"}},[e._v("day5/apps/infrastructure/scripts")]),e._v(" which contains the script and the "),s("code",[e._v("oauth2-permissions.json")]),e._v(" configuration file.")]),e._v(" "),s("p",[e._v("Run the script twice:")]),e._v(" "),s("ul",[s("li",[e._v("once for the "),s("code",[e._v("Development")])]),e._v(" "),s("li",[e._v("once for the "),s("code",[e._v("Testing")]),e._v("stage.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝 Note down the "),s("code",[e._v("UI AppId")]),e._v(" and "),s("code",[e._v("API AppId")]),e._v(" from the output after each run!")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("./aad-integration.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("API-APP-NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("API-APP-URI"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("UI-APP-NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("The output:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nUI AppId: "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("please note down"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nAPI AppId "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("please note down"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h2",{attrs:{id:"validate-the-applications-in-azure-ad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-the-applications-in-azure-ad"}},[e._v("#")]),e._v(" Validate the Applications in Azure AD")]),e._v(" "),s("p",[e._v("After you have run the script twice, navigate to your Azure AD and inspect the previously created applications. You should see four new applications.")]),e._v(" "),s("h2",{attrs:{id:"protect-scm-contacts-api-with-azure-ad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protect-scm-contacts-api-with-azure-ad"}},[e._v("#")]),e._v(" Protect SCM Contacts API with Azure AD")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝 If you started with the checkpoint please "),s("RouterLink",{attrs:{to:"/day5/apps/checkpoint/ChallengeAndBreakout.html#differences-in-challenge-3-protect-scm-contacts-api-with-azure-ad"}},[e._v("continue here")]),e._v(".")],1)]),e._v(" "),s("p",[e._v("Now that we have created the needed applications in Azure AD, it's time to deploy the SCM Contacts API to Azure with Azure AD integration to protect the API. After the deployment the API can only be accessed with a valid access token issued by Azure AD.")]),e._v(" "),s("p",[e._v("Yesterday we have created CI/CD builds for all services. Today we want to continue with Azure Pipelines to deploy all services with Azure AD integration.")]),e._v(" "),s("ol",[s("li",[e._v("Create and checkout a new branch named "),s("em",[e._v("features/scmcontactsaad")]),e._v(" in your Azure Repo.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝Make sure that you create the branch in the Azure Repo where you imported the Azure Developer College's sources yesterday.")])]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[e._v("Open the build file "),s("code",[e._v("scm-contacts-ci.yaml")]),e._v(" under "),s("code",[e._v("day4/apps/pipelines")]),e._v(" and change everything from "),s("code",[e._v("day4")]),e._v(" to "),s("code",[e._v("day5")])])]),e._v(" "),s("li",[s("p",[e._v("Save the definition, commit the changes and push the branch to your remote repository")])]),e._v(" "),s("li",[s("p",[e._v("Navigate to your Azure DevOps Project and run the pipleine "),s("code",[e._v("SCM-Contacts-CI")]),e._v(" targeting the branch "),s("code",[e._v("features/scmcontactsaad")])])]),e._v(" "),s("li",[s("p",[e._v("Go to Releases and edit "),s("code",[e._v("SCM-Contacts-CD")])])]),e._v(" "),s("li",[s("p",[e._v("Add the following variables and map it to the ARM Template's parameters:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Value")]),e._v(" "),s("th",[e._v("ARM Template Parameter")]),e._v(" "),s("th",[e._v("Stage")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("AadInstance")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://login.microsoftonline.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://login.microsoftonline.com"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("aadInstance")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientId")]),e._v(" "),s("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application")]),e._v(" "),s("td",[e._v("aadClientId")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadTenantId")]),e._v(" "),s("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),s("td",[e._v("aadTenantId")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadDomain")]),e._v(" "),s("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),s("td",[e._v("aadDomain")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientIdUri")]),e._v(" "),s("td",[s("a",{attrs:{href:"http://scmapi-dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://scmapi-dev"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("aadClientIdUri")]),e._v(" "),s("td",[e._v("Development")])])])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Value")]),e._v(" "),s("th",[e._v("ARM Template Parameter")]),e._v(" "),s("th",[e._v("Stage")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("AadInstance")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://login.microsoftonline.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://login.microsoftonline.com"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("aadInstance")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientId")]),e._v(" "),s("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application for stage Testing")]),e._v(" "),s("td",[e._v("aadClientId")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadTenantId")]),e._v(" "),s("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),s("td",[e._v("aadTenantId")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadDomain")]),e._v(" "),s("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),s("td",[e._v("aadDomain")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientIdUri")]),e._v(" "),s("td",[s("a",{attrs:{href:"http://scmapi-test",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://scmapi-test"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("aadClientIdUri")]),e._v(" "),s("td",[e._v("Testing")])])])]),e._v(" "),s("p",[e._v("ARM Template override template parameters:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("-sku "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AppServicePlanSKU"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -webAppName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ApiAppName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -use32bitworker "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("Use32BitWorker"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -alwaysOn "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AlwaysOn"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -applicationInsightsName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ApplicationInsightsName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -sqlServerName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("SqlServerName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -sqlUserName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("SqlAdminUserName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -sqlPassword "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("SqlAdminPassword"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -sqlDatabaseName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("SqlDatabaseName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -serviceBusNamespaceName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ServiceBusNamespaceName"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadInstance "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadInstance"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadClientId "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadClientId"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadTenantId "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadTenantId"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadDomain "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadDomain"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadClientIdUri "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadClientIdUri"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Run the release build")])])]),e._v(" "),s("h2",{attrs:{id:"validate-the-scm-contacts-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-the-scm-contacts-api"}},[e._v("#")]),e._v(" Validate the SCM Contacts API")]),e._v(" "),s("p",[e._v("Now that you have deployed the SCM Contacts API to your environment on Azure it's time to browse the Swagger UI of the API on your "),s("em",[e._v("Development")]),e._v(" stage. Open the Azure portal, go to the API App and browse to the Swagger UI. Try to execute a GET request. You will notice that you get back an HTTP response code "),s("code",[e._v("401")]),e._v(":")]),e._v(" "),s("p",[s("img",{attrs:{src:a(757),alt:"401 Swagger"}})]),e._v(" "),s("p",[e._v("That is what we expected! Your SCM Contacts API now requires a valid access token. To acquire a valid access token we can create a simple request as we already did in "),s("RouterLink",{attrs:{to:"/day5/challenges/challenge-2.html"}},[e._v("challenge-2")]),e._v(".")],1),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("We have enabled the "),s("em",[e._v("Implicit Flow")]),e._v(" for the front end application in Azure AD. The flow can sometimes be useful to get a token without writing source code. This should be avoided in productive environments.")])]),e._v(" "),s("p",[e._v("We use the "),s("code",[e._v("Token Echo Server")]),e._v(" again to request an access token from Azure AD for the SCM Contacts API. The tool is listening on port 5001 on your local machine. Tokens are accepted on the route "),s("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(". Before we can start the token request we have to add the url "),s("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(" as a valid reply url to the client Azure AD application. Go to your Azure AD in the Azure portal, open the client application "),s("code",[e._v("scmfe-dev")]),e._v("that you created for the "),s("code",[e._v("Development")]),e._v(" stage and add the url. You can add the reply url under "),s("em",[e._v("Authentication --\x3e Web --\x3e Redirect URIs --\x3e Add URI")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(758),alt:"TokenEchoServer Reply Url"}})]),e._v(" "),s("p",[e._v("Open a shell and run the Token Echo Server from "),s("a",{attrs:{href:"../apps/token-echo-server"}},[s("code",[e._v("day5/apps/token-echo-server")])])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("dotnet run\n")])])]),s("p",[e._v("Replace "),s("code",[e._v("TENANT_ID")]),e._v(" with your AAD Tenant Id and "),s("code",[e._v("APPLICATION_ID")]),e._v(" with the client application's Id (this is the id "),s("em",[e._v("UI AppId")]),e._v(" that you received when you created the first client application). Open a browser and paste the request:")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https:")]),e._v("//login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize?\nclient_id=APPLICATION_ID\n&response_type=id_token+token\n&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fapi%2Ftokenechofragment\n&response_mode=fragment\n&scope=openid%20profile%20http%3A%2F%2Fscmapi-dev%2FContacts.Read%20http%3A%2F%2Fscmapi-dev%2FContacts.Create%20http%3A%2F%2Fscmapi-dev%2FContacts.Update%20http%3A%2F%2Fscmapi-dev%2FContacts.Delete%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Create%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Update%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Update%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Delete\n&nonce=1234\n")])])]),s("p",[e._v("After executing the request and you have signed in, Azure AD shows you a consent page and you have to grant access for the requested API permissions.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(759),alt:"Permission Request"}})]),e._v(" "),s("p",[e._v("After giving consent, have a look at your browser's address bar. The "),s("code",[e._v("access_token")]),e._v(" is in the fragment of the url and should look something like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://localhost:5001/api/tokenechofragment#access_token=eyJ0eX...&token_type=Bearer&expires_in=3599&scope=openid+profile+User.Read+email&id_token=eyJ0eXAiOi...&session_state=0f76c823-eac5-4ec0-9d4a-edf40b783583\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝Make sure to only copy the "),s("code",[e._v("access_token")]),e._v(", not the full remainder of the string!")])]),e._v(" "),s("p",[e._v("Go to "),s("a",{attrs:{href:"http://jwt.ms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jwt.ms"),s("OutboundLink")],1),e._v(", paste the token and have a look at the decoded token.")]),e._v(" "),s("h3",{attrs:{id:"authorize-the-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorize-the-request"}},[e._v("#")]),e._v(" Authorize the request")]),e._v(" "),s("p",[e._v("In the Swagger UI of the SCM Contacts API you see an "),s("code",[e._v("Authorize")]),e._v(" button. After clicking the button you can set your valid "),s("code",[e._v("access_token")]),e._v("that is added to the authentication header with each API request.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(760),alt:"Swagger Authorize"}})]),e._v(" "),s("p",[e._v("Add your access_token as follows:")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[e._v("Bearer <your access_token>\n")])])]),s("p",[e._v("Authorize the Swagger UI and retry a the GET request. If you want you can now add contacts for the signed in user.")]),e._v(" "),s("h2",{attrs:{id:"pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[e._v("#")]),e._v(" Pull Request")]),e._v(" "),s("p",[e._v("Create a Pull Request and merge your changes into the master branch.")]),e._v(" "),s("h2",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),s("p",[e._v("In this challenge we have adjusted our deployment process to protect the SCM Contacts API with Azure AD. ASP.NET Core comes with an Authentication Middleware that must only be configured to require a JWT Bearer token for each request. Have a look at the code and see how the Middleware is configured.")]),e._v(" "),s("p",[e._v("To map the required OAuth2 permission to an API Route ASP.NET Core provides an attribute where you can specify the required policy.")]),e._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Authorize")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Policy "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" AuthorizationScopes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ContactsRead"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/day5/challenges/challenge-2.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day5/"}},[e._v("🔼 Day 5")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day5/challenges/challenge-bo-1.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);