# Web API provider
[[toc]]

## Overview
Web API/Restful provider allow you to use any web API in your chatbot. Defining Web API provider is simple.

## Create Web API provider
On the project list page inside an organization, click **Create** and select **Create provider**. On the create provider popup, select **Web API** provider type. Answer the rest of the questions on the popup window and click **Create**.


## Implement functions
On the service tab, first add the interface you want to implement. The function you need to implemented from these interfaces will show up in the function section. You can also add local functions that is needed to help the implementation. 

Double click on one of the function, you provide the implementation in two different ways.

### Provider dependent functions: Web API function
To implement a Web API function, you will need to select the http method (GET, POST, etc), and add url. You can add the headers for the function call, which will combined with global headers defined in the provider's configuration. These headers are useful for variety of things, including authentication. And finally, if needed, you can add json template in the body. Both key, value and body can be string template (in Kotline sense, inside ${}), where the actual value will the determined at the runtime. 

The types for input parameter and return will need to be defined on the platform. We will generate the Kotlin data class with Json serialization enabled when the chatbot make use of these interfaces and providers are deployed.

### Kotlin functions
To update and append your business, OpenCUI provides external functions: _update_ and _append_. You can call these functions using `connection.update` and `connection.append` in Kotlin functions. Check out the definitions of these functions in `io.opencui.provider.GoogleSheetsConnection`. To learn the source of the function, see [spreadsheets.values.update](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update) and [spreadsheets.values.append](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append).

- The input parameters are the same in these two functions. 

| Name             | Type                | Reference                                                                                                                                                                                                           |   
|:-----------------|:--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| range            | kotlin.String       | Use _range_ to select specific ranges. To learn how to define it, see [A1 notation](https://developers.google.com/sheets/api/guides/concepts#cell).                                                                 |
| values           | kotlin.Any[]        | Use _values_ to add/append a row of values by putting values in a list, like`listOf(a, b, c)`.                                                                                                                      |
| valueInputOption | kotlin.String       | Use _valueInputOption_ to determine how input data should be interpreted. To know what options you should choose, see [ValueInputOption](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption). |

- The return types are [UpdateValuesResponse](https://developers.google.com/resources/api-libraries/documentation/sheets/v4/java/latest/com/google/api/services/sheets/v4/model/UpdateValuesResponse.html#UpdateValuesResponse--) and  [AppendValuesResponse](https://developers.google.com/resources/api-libraries/documentation/sheets/v4/java/latest/com/google/api/services/sheets/v4/model/AppendValuesResponse.html#AppendValuesResponse--). You can use the methods in these classes to check if the response meets expectations. For example, if you expect to update 3 values, use `UpdateValuesResponse.getUpdatedCells == 3` to check.

Suppose you want to update a user's delivery address and phone number in the range of _"'UserInfo'!B5:C5"_. If the input parameters are _address_ and _phoneNumber_, the Kotlin function will be like this:
```kotlin
var values = listOf(address, phoneNumber)
var result = connection!!.update("'UserInfo'!B2", values, "RAW")
// if the update is successful, return true, otherwise, return false
return result!!.getUpdatedCells() == 2
```
