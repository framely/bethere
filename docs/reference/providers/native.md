# Native Providers

## Introduction
Native providers are crucial to OpenCUI chatbots, as they provide the implementation for both system interfaces (like channels and support) and application interfaces or services (like payments). 

With native providers, you can easily use extension services provided by OpenCUI or other organizations, and you can even develop new services for yourself or other builders.

## Types of Native Providers
When registering a native provider, you need to declare whether its source is accessible to OpenCUI or not:

- **OpenCUI-hosted**: The platform needs access to the source code
- **Private deployment**: The source code will not be accessed by the OpenCUI platform

A chatbot that relies on even one private deploy provider cannot be hosted by OpenCUI. Instead, you'll need to export the generated Kotlin project and build and deploy it according to your own DevOps rules.

## Build Native Provider

### 1. Create Native Provider
To create a native provider:

1. Go to one of your orgs, select **Provider** in the left side menu, click **Create** on the right side.

   ![create provider](/images/provider/nativeprovider/create_provider.png)

2. In the Create popup window: 
    - Enter a label for your provider.
    - Select **Native Provider** in **Provider Type** field.
    - Declare **Deploy Mode**: Private deploy or OpenCUI-hosted.
    - Click **Save**.
 
    ![create provider popup](/images/provider/nativeprovider/create_provider_popup.png)

### 2. Declare Service Interface
When you've created your provider, you need to declare which service interface it implements:

1. Navigate to the service component you want to implement. You can search for it from:
   - Within an organization: Use the search bar on the component list page
   - Within Explore page: Use the search bar at the top (select **SERVICE** in filter)

   ![search in Component list](/images/provider/nativeprovider/search_in_org.png)
   *Search in Component list page*

   ![search in Explore list](/images/provider/nativeprovider/search_in_clone_import.png)
   *Search in Explore list page*

2. When in the service component, click **Import** on the second navigation bar. In the popup window, select your native provider and save.

   ![click import](/images/provider/nativeprovider/click_import_icon.png)
   *Click import*

   ![select native provider](/images/provider/nativeprovider/select_native_provider.png)
   *Select native provider*

3. Return to your native provider, go to the **Service** page from the left side menu. In the **Implemented** section, select the service interface you just imported.

   ![select service interface](/images/provider/nativeprovider/select_service_interface.png)
   *Select service interface*

   ![done with selection](/images/provider/nativeprovider/done_with_selection.png)
   *Done with selection*

### 3. Configuration Setup
Configuration is how you declare the implementation dependencies for a build.

![configuration](/images/provider/nativeprovider/configuration.png)

#### Provider Class Name
Enter the fully qualified name of the implementation class that implements the service interface.

![provider class name](/images/provider/nativeprovider/provider_class_name.png)

#### Configuration Meta
Configuration Meta helps you set up the information needed when wiring this provider. You can create a configuration template in JSON format.

![configuration meta](/images/provider/nativeprovider/configuration_meta.png)

##### JSON Format
```json
[
  {
    "key": "key1",
    "label": "Display Label 1",
    "type": "String | Text | Boolean",
    "placeholder": "placeholder text",
    "default_value": "default value"
  },
  {
    "key": "key2",
    "label": "Display Label 2",
    "placeholder": "placeholder text",
    "options": [
      {
        "value": "value1",
        "label": "Option 1"
      },
      {
        "value": "value2",
        "label": "Option 2"
      }
    ]
  }
]
```

##### Fields
| Fields          | Type   | Description |
|:---             |:---    |:---         |
| `key`           | string | *Required*. Key will pass to codegen. |
| `label`         | string | *Required*. Displayed on chatbot Integrations. |
| `type`          | string | *Required when there is no `options[]`*. Should be one of: `String`, `Text` or `Boolean`, case-sensitive. |
| `placeholder`   | string | *Optional*. |
| `default_value` | string | *Optional*. |
| `options[]`     | array  | *Required when there is no `type`*. |

Options:
| Fields          | Type   | Description |
|:---             |:---    |:---         |
| `value`         | string | *Required*. |
| `label`         | string | *Required*. Displayed on selection menu. |

##### Example Configuration
This example shows how a native provider can be configured using text input, selection, and boolean components:

```json
[
  {
    "key": "key1",
    "label": "String Input",
    "type": "String",
    "placeholder": "Enter string input",
    "default_value": "Default Value"
  },
  {
    "key": "key2",
    "label": "Text Area",
    "type": "Text",
    "placeholder": "Enter text"
  },
  {
    "key": "key3",
    "label": "Boolean",
    "type": "Boolean",
    "default_value": "true"
  },
  {
    "key": "key4",
    "label": "Options",
    "placeholder": "Please select",
    "default_value": "value1",
    "options": [
      {
        "value": "value1",
        "label": "Option 1"
      },
      {
        "value": "value2",
        "label": "Option 2"
      }
    ]
  }
]
```

This code generates configuration forms like this:

![configuration meta example](/images/provider/nativeprovider/configuration_meta_example.png)

#### Implementation
Enter the dependency info for linking implementation source code in the format: `group:project:version`
- `group`: The group specified in the **build.gradle** file of your project
- `project`: The subdirectory name of this project
- `version`: The version specified in the **build.gradle** file

For example: `io.opencui.extensions:helloworld:1.0-SNAPSHOT`

![implementation](/images/provider/nativeprovider/implementation.png)

## Wire and Configure
After registering a native provider, you can use it in chatbots:

1. **Import the service interface**: Click into the service component implemented by the native provider you want to use, and import it into your chatbot.

   ![click import](/images/provider/nativeprovider/click_import_icon.png)

2. **Wire native provider to its service interface**: Switch to your chatbot. Go to the **Settings** page, in the **Integrations** tab, select the service interface you just imported and the native provider that implements it.

   ![chatbot integration](/images/provider/nativeprovider/chatbot_integration.png)

3. **Configure the integration**: Complete the configuration form and save. Don't forget to merge your latest changes to master.

   ![service provider](/images/provider/nativeprovider/service_provider.png)

## Example: HelloWorld Extension
Let's use the [helloworld extension](https://github.com/opencui/extensions/tree/main/helloworld) to demonstrate the complete native provider workflow. This simple extension gets a name from configuration and returns `hello $name`.

### Describe Interface
1. **Create service interface**. Go to one of your org, select **Components** in left side menu, click **Create** on the right side. In the **Create** popup window: 
    - Enter a label for service component. For example, our hello world example uses `component_0915` as label. 
    - Turn on service toggle, enable service.
    - No need to add language. As a service that provides an interface for extensions does not need to add language.
    - Click **Save**.

    ![create service component](/images/provider/extension/hello_create_service_component.png)
    *Click Create*

    ![create service component popup](/images/provider/extension/hello_service_popup.png)
    *Create popup window*

2. **Declare function**. Head to **Service** page, in the **Functions** section, click **Add** to declare function signature. In helloworld example, we declare a simple function labeled as `testFunction`, which takes a string as input parameter named `str`, and return a string.

    ![add function](/images/provider/extension/hello_add_function.png)
    *Click add function*

    ![function popup window](/images/provider/extension/hello_test_function.png)
    *Function popup window*

3. Review your changes and merge them into master.

### Generate Code Stub
In the service you described, click **Export** on the second navigation bar to extract the generated file. 

![export service component](/images/provider/extension/hello_export_service.png)

### Develop Extension
1. Clone extensions repo, create a subdirectory to host your subproject. Here we create `helloworld` under extensions.
    ```
    git clone https://github.com/opencui/extensions.git
    ```

2. Implement the service interface, you can develop it as standard Kotlin project. The implementation code example of `helloworld` is like:

    ```kotlin
    data class HelloWorldProvider(
    val config: Configuration,
    override var session: UserSession? = null): IComponent_0915, IProvider {

    override fun testFunction(str: String): String? {
        return "hello ${config["name"]}, $str"
    }

    companion object: ExtensionBuilder<IComponent_0915> {
        override fun invoke(config: Configuration): IComponent_0915 {
        return HelloWorldProvider(config)
        }
    }
    }
    ```

3. Make sure the project actually builds before you move to the next step. 
    ```
    ./gradlew your_project:build
    ```

For a full overview, see [helloworld](https://github.com/opencui/extensions/tree/main/helloworld) in OpenCUI extensions repo.

### Register Native Provider
1. Create a native provider. Go to one of your org, select **Provider** in left side menu, click **Create** on the right side. In the **Create** popup window: 
    - Enter a label for provider. For example, `test` as label. 
    - Select **Native Provider** in **Provider Type** field.
    - Select **OpenCUI-hosted** in **Deploy Mode** field as `helloworld` is one of OpenCUI extensions.
    - Click **Save**.
    
    ![create native provider](/images/provider/extension/hello_create_native.png)
    *Click Create*

    ![create native provider popup](/images/provider/extension/hello_create_native_popup.png)
    *Create popup window*

2. Declare service interface `component_0915` in native provider: 
    - Go to service `component_0915`, click **Import** on the second navigation bar. In the popup window, select your native provider, in this case we select `test`, and **Save**.
        
      ![import component0915 to native provider](/images/provider/extension/hello_import_component0915.png)

    - Back to the `test` native provider, heading to **Service** page from the left side menu. In the **Implemented** section, select `component_0915`.

      ![select service in native provider](/images/provider/extension/hello_select_service.png)


3. Configuration setup, heading to **Configuration** page from the left side menu:
    - Enter **Provider Class Name**, a fully qualified name of this implementation class. In this case, enter `me.test.component_0915.HelloWorldProvider`. 
    - Set **Configuration Meta** as following: 
        ```json
        [
          {
            "key": "name",
            "label": "Name",
            "type": "String"
          }
        ]
        ```
    - Enter `io.opencui.extensions:helloworld:1.0-SNAPSHOT` in **Implementation** field. The format of this field should be `group:project:version`. Normally, the `group` and `version` field can be found in the **build.gradle** file.
    
      ![configuration setup](/images/provider/extension/hello_configuration_setup.png)

4. Review and merge your changes into master.

### Wire and Configure in Chatbot
1. If you have not already created a chatbot, create one now. Inside your org, head to chatbot list page by clicking **Chatbots** in the left side menu, then click **Create** on the right side.
    - Enter your chatbot's label in the Project Label field, for example `helloworld`.
    - Select your preferred Region.
    - Select the languages for your chatbot in the **Add Language** field, we selcet `English(en)` here.
    
    ![create chatbot](/images/provider/extension/hello_create_chatbot.png)
    *Create chatbot*

    ![create chatbot popup window](/images/provider/extension/hello_create_chatbot_popup.png)
    *Create popup window*

2. Import service `component_0915` into chatbot `helloworld`. Go to service `component_0915`, click **Import** on the second navigation bar. In the popup window, select your chatbot, in this case we select `helloworld`, and save. 

    ![import component0915 to chatbot](/images/provider/extension/hello_import_component0915.png)

3. Switch to your `helloworld` chatbot, wiring the implementation and configure the integration. 
    - Heading to **Settings** page, in **Integrations** tab, select the service interface you just imported and the native provider that implements it. 
    - Finish the configuration form and save.

    ![chatbot integration](/images/provider/extension/hello_chatbot_integration.png)
    *Wired the implementatio*

    ![configuration popup window](/images/provider/extension/hello_configuration.png)
    *Configuration popup window*

4. Don't forget to merge your latest changes to master.