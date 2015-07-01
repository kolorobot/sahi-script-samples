/**
 * Brings up a javascript alert with given message. Use only while debugging
 * @param {string} message The message that is to be displayed
 * @example <pre><code>
 * //displays a javascript alert with message "hello there!"
 * _alert("hello there!"); </code></pre>
 */
function _alert(){};
/**
 * Asserts that the object does not contain the expectedText, else logs the message.
 * @param {string} expectedText The text against which the check is to be done 
 * @param {object} object The DOM object whose text is to be checked
 * @param {string} message The error message to be logged in case of failure
 */
function _assertNotContainsText(){};
/**
 * This is a browser Action API. It asserts that expected and actual are equal, else logs the message. If the expected and actual are equal, it will do nothing.
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and logs the message if the expected and actual values are not equal.
 * @param {string} expected Expected value
 * @param {string} actual Actual value
 * @param {string} message Message to be written to logs if the expected and actual values are not equal
 * @example <pre><code>
 * //does nothing
 * _assertEqual("abc", "abc", "Some Log Message");</code></pre>
 * @example <pre><code>
 * //writes "Some Log Message" to logs.
 * _assertEqual("abc", "def", "Some Log Message");</code></pre>
 */
function _assertEqual(){};
/**
 * This is a browser Action API. It asserts that expected and actual are <strong>NOT</strong> equal, else logs the message. If the expected and actual are NOT equal, it will do nothing.
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and logs the message if the expected and actual values are equal.
 * @param {string} expected Expected value
 * @param {string} actual Actual value
 * @param {string} message Message to be written to logs if the expected and actual values are equal
 * @example <pre><code>
 * //does nothing
 * _assertNotEqual("abc", "def", "Some Log Message");</code></pre>
 * @example <pre><code>
 * //writes "Some Log Message" to logs.
 * _assertEqual("abc", "abc", "Some Log Message");</code></pre>
 */
function _assertNotEqual(){};
/**
 * _assertNotNull will do nothing if the object passed to it is not null. (Object exists)
 * _assertNotNull will log failures to the playback logs if the object is null. (Object does not exist)
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and throws an exception if the object is null.
 * @param {object} object Any object
 * @param {string} message Message to be logged
 * @example <pre><code>
 * //Does nothing
 * _assertNotNull("abc");</code></pre>
 * @example <pre><code> 
 * //Writes "some log message" to the playback logs
 * _assertNotNull(null, "some log message");</code></pre>
 */
function _assertNotNull(){};
/**
 * _assertNull will do nothing if the object passed to it is null. (Object does not exist)
 * _assertNull will log failures to the playback logs if the object is not null. (Object exists)
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and throws an exception if the object is not null.
 * @param {object} object Any object
 * @param {string} message Message to be written to logs if condition was true
 * @example <pre><code>
 * // does nothing
 * _assertNull(null);</code></pre>
 * @example <pre><code>
 * // and writes "Some Log Message" to logs.
 * _assertNull("abc", "Some Log Message"); </code></pre>
 */
function _assertNull(){};
/**
 * _assertTrue will do nothing if the condition passed to it is true
 * _assertTrue will log failures to the playback logs if the condition evaluates to false.
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and throws an exception if the condition is false
 * @param {boolean} condition Boolean expression
 * @param {string} message Message to be written to logs if condition was true
 * @example <pre><code>
 * // does nothing
 * _assertTrue(1==1);</code></pre>
 * @example <pre><code>
 * // and writes "Some Log Message" to logs.
 * _assertTrue(1==2, "Some Log Message"); </code></pre>
 */
function _assertTrue(){};
/**
 * _assert will do nothing if the condition passed to it is true
 * _assert will log failures to the playback logs if the condition evaluates to false.
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and throws an exception if the condition is false
 * @param {boolean} condition Boolean expression
 * @param {string} message Message to be written to logs if condition was true
 * @example <pre><code>
 * // does nothing
 * _assert(1==1);</code></pre>
 * @example <pre><code>
 * // and writes "Some Log Message" to logs.
 * _assert(1==2, "Some Log Message"); </code></pre>
 */
function _assert(){};
/**
 * _assertNotTrue will do nothing if the condition passed to it is not true
 * _assertNotTrue will log failures to the playback logs if the condition evaluates to true.
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and throws an exception if the condition is true
 * @param {boolean} condition Boolean expression
 * @param {string} message Message to be written to logs if condition was true
 * @example <pre><code>
 * // does nothing
 * _assertNotTrue(1==2);</code></pre>
 * @example <pre><code>
 * // and writes "Some Log Message" to logs.
 * _assertNotTrue(1==1, "Some Log Message");</code></pre>
 */
function _assertNotTrue(){};
/**
 * _assertFalse will do nothing if the condition passed to it is false
 * _assertFalse will log failures to the playback logs if the condition evaluated to true.
 * DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and throws an exception if the condition is true
 * @param {boolean} condition Boolean expression
 * @param {string} message Message to be written to logs if condition was true
 * @example <pre><code>
 * // does nothing
 * _assertFalse(1==2);</code></pre>
 * @example <pre><code>
 * // and writes "Some Log Message" to logs.
 * _assertFalse(1==1, "Some Log Message");</code></pre>
 */
function _assertFalse(){};
/**
 * Asserts that the object is not null, else logs the message.
 * @param {element} object the object to be tested
 * @param {string} message The message to be logged
 */
function _assertExists(){};
/**
 * Asserts that the object does not exist (is null), else logs the message.
 * @param {element} object the object to be tested
 * @param {string} message The message to be logged
 */
function _assertNotExists(){};
/**
 * Asserts that expected and actual arrays are equal, else logs the message. This is internally called by _assertEqual if expected and actual are arrays.
 * @param {Array} expected Expected array
 * @param {Array} actual Actual array
 * @param {string} message Message to be logged
 * @deprecated
 */
function _assertEqualArrays(){};
/**
 * Calls server side code which cannnot be executed by javascript on the browser.
 * @deprecated since Sahi v2.0
 * @param {string} cmd String command of the form "className_methodName"
 * @param {string} qs QueryString to be made available in the invoked method
 */
function _callServer(){};
/**
 * _click simulates a user's click on the given element.
 * @param {element} element HTML Element to click
 * @param {string} [combo] Any combo key. Can be "CTRL", "SHIFT", "ALT" or "META"; Can also be two or more keys together like "CTRL|SHIFT"
 * @example <pre><code>
 * //Clicks button "Click Me"
 * _click(_button("Click Me"));
 * //clicks with CTRL key pressed
 * _click(_button("Click Me"), "CTRL");
 * //clicks with CTRL and SHIFT keys pressed
 * _click(_button("Click Me"), "CTRL|SHIFT");</code></pre>
 */
function _click(){};
function _clickLinkByAccessor(){};
/**
 * simulates a drag and drop action.
 * @param {element} element HTML element to be dragged
 * @param {element} element HTML Element where the draggable will be dropped.
 * @example <pre><code> 
 * //will drag the item and drop it in the shopping cart
 * _dragDrop(_image("item"), _byId("ShoppingCart")); </code></pre>
 */
function _dragDrop(){};
/**
 * Returns the text of the selected option in a &lt;select&gt; tag
 * @param {element} selectElement The select element whose text is needed
 */
function _getSelectedText(){};
/**
 * Resets the random number associated with key, to another random number.
 * @param {string} id  Id of the _savedRandom that needs to be reset
 * @deprecated since v2.0
 */
function _resetSavedRandom(){};
/**
 * It is used to select an option from a select box.
 * @param {element} element The select element
 * @param {string|array} Option's text, id or index; can also pass an array of options for multi-select
 * @param {boolean} isMultiple true for multiselect, optional for single select
 * @example <pre><code>
 * _setSelected(_select("Age"), "28");</code></pre>
 * @example <pre><code>
 * _setSelected(_select("color"), 1); // Selects the second option in a select box</code></pre>
 * @example <pre><code>
 * _setSelected(_select("color"), "red"); // Selects red in a multiselect box</code></pre>
 * @example <pre><code>
 * _setSelected(_select("color"), "blue", true); // Selects blue also in the multiselect box</code></pre>
 * @example <pre><code>
 * _setSelected(_select("color"), ["red", "blue"]); // Unselects previous and selects red and blue in a multiselect box</code></pre>
 * @example <pre><code>
 * _setSelected(_select("color"), [1,2,3]); // Unselects previous and selects the second, third and fourth options in a multiselect box</code></pre>
 * @example <pre><code>
 * _setSelected(_select("color"), ["green", "yellow"], true); // Keeps previous options selected and selects "green" and "yellow" also</code></pre>
 */
function _setSelected(){};
/**
 * It is used for assigning values to textboxes and textareas.
 * @param {element} element HTML form element whose value is to be set
 * @param {strin} value The value to be set
 * @example <pre><code>
 * //populates textbox identified as _textbox("user") with Vivek
 * _setValue(_textbox("user"), "Vivek");</code></pre>
  */
function _setValue(){};
/**
 * Used to simulate an event on element.
 * @param {element} element element on which event is to be simulated
 * @param {event} event the event to be simulated
 * @deprecated
 */
function _simulateEvent(){};
/**
 * _call is used execute javascript on the browser. _call should be used sparingly and only if none of the inbuilt Sahi Browser Action APIs work.
 * @param {javascript} javascript The JS code sippet to be executed on the browser
 * @example <pre><code>
 * //executes the JS function on the browser
 * &lt;browser&gt;
 * function toggleTreeWidget(){
 * // some javascript to toggle a tree widget
 * }
 * &lt;/browser&gt;
 * _call(toggleTreeWidget());
 * _call(location.href = "xxx");</code></pre>
 */
function _call(){};
/**
 * eval is used to eval a string on the browser.
 * @param {string} string The string to eval on the browser
 * @example <pre><code>
 * //Evals the string directly on browser
 * _eval("document.form1.complicatedWidget.click()");</code></pre>
 */
function _eval(){};
/**
 * Stores the value in key for retreival.The value persists across tests in a suite, if suite.global_variables is true in sahi.properties.
 * @param {string} key The key name through which the variable is accesible
 * @param {string} value Value corresponding to the key
 * @example <pre><code>
 * //sets the value of userid1 as the value of _textbox("user") 
 * _setGlobal("userid1", _textbox("user").value);</code></pre>
 */
function _setGlobal(){};
/**
 * Waits for a particular time interval or a condition to be true
 * @param {integer} maxTime Time in milliseconds after which the execution will resume
 * @param {boolean} [condition] Condition which when satisfied will resume the execution
 * @example <pre><code> 
 * //Will stop execution for a second
 * _wait(1000);
 * //Will wait Will wait till div by id "ajaxy" is populated or one second, whichever occurs sooner
 * _wait(1000, _byId("ajaxy").innerHTML!="");</code></pre>
 */
function _wait(){};
/**
 * Highlights an element with a red border. Used for debugging purposes.
 * @param {element} element The html element to be highlighted
 * @example <pre><code>
 * //Highlights div with id="abc"
 * _highlight(_div("abc"));</code></pre>
 */
function _highlight(){};
/**
 * It is used to log into the playback logs. This is different from the debug methods which log messages to the standard output/error streams or into a $file.
 * @param {string} message The message to be written in the logs
 * @param {string} type Changes the styling of log message where type can be "success", "failure", "error", "info" for different colors of bar and "custom", "custom1", "custom2" … "custom5" for different colors
 * @example <pre><code>
 * // shows up "Here" as a green bar in the playback log.
 * _log("Here", "success");</code></pre>
 * @example <pre><code>
 * // shows up "Here" as a red bar in the playback log.
 * _log("Here", "failure"); </code></pre>
 * @example <pre><code>
 * // shows up "Here" as a red bar in the playback log.
 * _log("Here", "error"); </code></pre>
 * @example <pre><code>
 * // shows up "Here" without any colour, in the playback log.
 * _log("Here", "info"); </code></pre>
 * @example <pre><code>
 * // shows "Here" in a different color on the logs.
 * _log("Here", "custom"); </code></pre>
 */ 
function _log(){};
/**
 * _navigateTo is used to navigate to a URL. This can be used as the first line in a test to set the start point. If the url is same as what is loaded on the browser, the page will be refreshed only if forceReload is true
 * @param {string} URL The URL which is to be loaded
 * @param {boolean} [forceReload] False by default. Set to true if reloading the same page is required
 * @example <pre><code>
 * //goes to URL "http://sahi.co.in"
 * _navigateTo("http://sahi.co.in");</code></pre>
 * @example <pre><code>
 * //If already on http://sahi.co.in, it will force relaod the page
 * _navigateTo("http://sahi.co.in", true);</code></pre>
 */
function _navigateTo(){};
/**
 * simulates a user's double click on the given element.
 * @param {element} element Element on which user double click is to be simulated
 * @param {string} [combo] Any combo key; can be "CTRL", "SHIFT", "ALT" or "META"; Can also be two or more keys together like "CTRL|SHIFT"
 * @example <pre><code>
 * //Double clicks on button
 * _doubleClick(_button("Double Click Me"));</code></pre>
 * @example <pre><code>
 * //doubleClicks with CTRL key pressed
 * _doubleClick(_button("Double Click Me"),"CTRL");</code></pre>
 * @example <pre><code>
 * //doubleClicks with CTRL and SHIFT keys pressed 
 * _doubleClick(_button("Double Click Me"), "CTRL|SHIFT");</code></pre>
 */
function _doubleClick(){};
/**
 * simulates a user's right click on the given element.
 * @param {element} element Element on which user double click is to be simulated
 * @param {string} [combo] Any combo key; can be "CTRL", "SHIFT", "ALT" or "META"; Can also be two or more keys together like "CTRL|SHIFT"
 * @example <pre><code>
 * //Right clicks on button
 * _rightClick(_button("Right Click Me"));</code></pre>
 * @example <pre><code>
 * //Right clicks with CTRL key pressed
 * _rightClick(_button("Right Click Me"),"CTRL");</code></pre>
 * @example <pre><code>
 * //Right clicks with CTRL and SHIFT keys pressed 
 * _rightClick(_button("Right Click Me"), "CTRL|SHIFT");</code></pre>
 */
function _rightClick(){};
/**
 * Forces the proxy to process certain patterns of urls differently. If class_method is not specified, sends back a simple HTML blank page. If _addMock("pattern") is called without a second parameter, net.sf.sahi.command.MockResponder.simple(HttpRequest) is used to process the request. This response uses template at sahi/htdocs/spr/simpleMock.htm. One can modify this to show a generic mock response. By default this response just shows the mocked url.
 * @param {string} pattern The pattern of the URL
 * @param {string} class_method The class and method that will delegate the reponse handling
 * @example <pre><code>
 * _navigateTo("http://sahi.co.in/demo/index.htm");
 * // assert a particular link exists on that page
 * _assertNotNull(_link("Link Test"));
 * // add mock
 * _addMock(".*sahi[.]co[.]in.*");
 * _navigateTo("http://sahi.co.in/demo/index.htm", true);
 * // link should not exist
 * _assertNull(_link("Link Test"));
 * // Instead the page contains the mocked url
 * _assert(_containsText(document.body, "http://sahi.co.in/demo/index.htm"));</code></pre>
 */
function _addMock(){};
/**
 * Removes the mock behavior added via _addMock or _mockImage for that pattern.
 * @param {string} pattern The pattern on which mock is to be removed
 */
function _removeMock(){};
/**
 * Sets an expectation such that when a javascript confirm with given message appears, based on the boolean value, OK or Cancel will be processed. Javascript calls to confirm(msg) are mocked out by Sahi so that it does not stop playback. 
 * Sahi by default acts as if "OK" was clicked when a confirm dialog comes up. It is possible to make the confirm return as if it was cancelled by setting the second parameter to false. If there was no expectation set, Sahi will return true.
 * @param {string} label The label of confirm box
 * @param {boolean} value Expected boolean return value
 * @see {@link http://sahi.co.in/w/_expectConfirm}
 */
function _expectConfirm(){};
/**
 * _setFile is used to set a $file in the $file input field. Form elements of type "$file" cannot be populated using javascript on the browser.
 * So Sahi has a workaround for handling $file uploads.
 * Sahi intercepts the request in the proxy, reads the $file off the $file system and inserts it into the multipart request.
 * The $file has to be present on that path on the machine running the proxy.
 * @param {element} element HTML Form File Element whose value needs to be set
 * @param {string} filePath Path of the $file to be uploaded.
 * @param {string} [actionURL] The form action URL to which the $file is submitted. This is an optional parameter. Use it in cases where the form's action URL is changed on setting the $file. By default, it uses the form's current action URL.
 * @example <pre><code>
 * //sets the $file efg.jpg for upload
 * _setFile(_file("id"), "C:\\abc\\efg.jpg");</code></pre>
 * @example <pre><code>
 * //sets the $file efg.jpg for upload at given action URL
 * _setFile(_file("id"), "C:\\abc\\efg.jpg", "formSubmit.jsp");</code></pre>
 * @desc Note that _setFile works in a round about way. It is not handled at the browser level. It is handled at the proxy. So you will not see the $file input box being populated with your desired filename. But when the form is submitted, the proxy will add the correct $file to the request before it sends it to your web server. But if there are javascript checks before form submit to see if the filename is non-empty, then the script will not work as desired.
 * @desc If there are javascript validations on the $file field, you can try this hack. Before submitting the $file, change the field's type to "text", and then set its value.
 * @example <pre><code>
 * // set the $file
 * _setFile(_file("$file"), "scripts/demo/uploadme.txt");
 * // Change the "type" attribute of $file field
 * if (_isIE()){
 * 	_call(_file("$file").outerHTML = _file("$file").outerHTML.replace(/type=['"]?$file['"]?/, "type=text"));
 * }else{
 * 	_call(_file("$file").type = "text");
 * }
 * // Set the value into the textbox
 * _setValue(_textbox("$file"), "scripts/demo/uploadme.txt");</code></pre>
 */
function _setFile(){};
function _setFile2(){};
/**
 * Javascript calls to prompt(msg) are mocked out by Sahi so that it does not stop the playback. Sahi by default returns "" if a prompt dialog comes up. It is possible to make the prompt return the value one wants, by specifying _expectPrompt(label, value);before the statement which triggers the prompt dialog. If there was no expectation set, Sahi will return "".
 *@param {string} label The visible text on the prompt dialog.
 *@param {string} value Value to be filled in the prompt
 *@see {@link http://sahi.co.in/w/_expectPrompt}
 **/
function _expectPrompt(){};
/**
 * Prints the message on to the console for debugging purposes.
 * @param {string} message The message to be displayed on console
 */
function _debug(){};
/**
 * Prints the message on to the error stream for debugging purposes.
 * @param {string} message The message to be displayed
 */
function _debugToErr(){};
/**
 * Prints the message into a $file for debugging purposes.
 * @param {string} message The message to be written in the $file
 * @param {string} filepath path of the $file to be written
 */
function _debugToFile(){};
/**
 * simulates mouse hovering on the given element.
 * @param {element} element HTML Element to hover over
 * @param {string} [combo] Any combo key. It can be "CTRL", "SHIFT", "ALT" or "META"; Can also be two or more keys together like "CTRL|SHIFT"
 * @example <pre><code> 
 * //hovers on button "Click Me"
 * _mouseOver(_button("Click Me"));</code></pre>
 *  @example <pre><code> 
 * // mouseOver with CTRL key pressed
 * _mouseOver(_button("Click Me"), "CTRL"); </code></pre>
 *  @example <pre><code> 
 * // mouseOver with CTRL and SHIFT keys pressed
 * _mouseOver(_button("Click Me"), "CTRL|SHIFT"); </code></pre>
 */
function _mouseOver(){};
/**
 * simulates a mousedown on the given element.
 * @param {element} element HTML Element to perform a mousedown on
 * @param {boolean} [isRight] Set to true for a left-hand mouse
 * @param {string} [combo] Any combo key; can be "CTRL", "SHIFT", "ALT" or "META"; Can also be two or more keys together like "CTRL|SHIFT"
 * @example <pre><code> 
 * _mouseDown(_button("Mouse Down"));</code></pre>
 * @example <pre><code> 
 * //mouseDown for a left-hand mouse
 * _mouseDown(_button("Mouse Down"), true); </code></pre>
 *  @example <pre><code> 
 * //mouseDown with CTRL key pressed
 * _mouseDown(_button("Mouse Down"), false, "CTRL"); </code></pre>
 *  @example <pre><code> 
 * //mouseDown with CTRL and SHIFT keys pressed
 * _mouseDown(_button("Mouse Down"), false, "CTRL|SHIFT"); </code></pre>
 */
function _mouseDown(){};
/**
 * simulates a mouseup on the given element.
 * @param {element} element HTML Element to perform a mouseup on
 * @param {boolean} [isRight] Set to true for a left-hand mouse
 * @param {string} [combo] Any combo key; can be "CTRL", "SHIFT", "ALT" or "META"; Can also be two or more keys together like "CTRL|SHIFT"
 * @example <pre><code> 
 * _mouseup(_button("Mouse up"));</code></pre>
 * @example <pre><code> 
 * //mouseup for a left-hand mouse
 * _mouseup(_button("Mouse up"), true); </code></pre>
 *  @example <pre><code> 
 * //mouseup with CTRL key pressed
 * _mouseup(_button("Mouse up"), false, "CTRL"); </code></pre>
 *  @example <pre><code> 
 * //mouseup with CTRL and SHIFT keys pressed
 * _mouseup(_button("Mouse up"), false, "CTRL|SHIFT"); </code></pre>
 */
function _mouseUp(){};
/**
 * simulates pressing a keyboard key on the given element.
 * @param {element} element any HTML element
 * @param {string} charinfo charInfo can be:  <ul> 
 * <li>a character (eg. 'b')</li>
 * <li>charCode of a character (eg. 98)</li>
 * <li>an array of [keyCode, charCode] (eg. [13,13] for pressing ENTER key)</li>
 * @param {string} [combo] can be any of "CTRL", "ALT", "SHIFT" or "META" 
 * @example <pre><code>
 * _keyPress(document.body, 'a');</code></pre>
 * @example <pre><code>
 * _keyPress(document.body, 'a', "CTRL");</code></pre>
 */

function _keyPress(){};
/**
 * Brings focus to element.
 * @param {element} element The element to be focused
 * @example <pre><code>
 * //focuses text box identified as _textbox("abc") by Sahi
 * _focus(_textbox("abc"));</code></pre>
 */
function _focus(){};
/**
 * simulates doing a keyDown of a key on the given element.
 * @param {element} element any HTML element
 * @param {string} charinfo charInfo can be:  <ul> 
 * <li>a character (eg. 'b')</li>
 * <li>charCode of a character (eg. 98)</li>
 * <li>an array of [keyCode, charCode] (eg. [13,13] for pressing ENTER key)</li>
 * @param {string} [combo] can be any of "CTRL", "ALT", "SHIFT" or "META" 
 * @example <pre><code>
 * _keyDown(document.body, 'a');</code></pre>
 * @example <pre><code>
 * _keyDown(document.body, 'a', "CTRL");</code></pre>
 */
function _keyDown(){};
/**
 * simulates doing a keyUp of a key on the given element.
 * @param {element} element any HTML element
 * @param {string} charinfo charInfo can be:  <ul> 
 * <li>a character (eg. 'b')</li>
 * <li>charCode of a character (eg. 98)</li>
 * <li>an array of [keyCode, charCode] (eg. [13,13] for pressing ENTER key)</li>
 * @param {string} [combo] can be any of "CTRL", "ALT", "SHIFT" or "META" 
 * @example <pre><code>
 * _keyUp(document.body, 'a');</code></pre>
 * @example <pre><code>
 * _keyUp(document.body, 'a', "CTRL");</code></pre>
 */
function _keyUp(){};
/**
 * same as _addMock except that it by default calls net.sf.sahi.command.MockResponder.mockImage(HttpRequest) which returns a simple image at sahi/htdocs/spr/mock.gif
 * @param {string} pattern The pattern of the URL
 * @param {string} class_method The class and method that will delegate the reponse handling
 */
function _mockImage(){};
/**
 * It can be used to run batch or shell scripts. It internally does a java Runtime.exec()
 * @param {string} command Command to be executed
 * @param {boolean} isSynchronous Set this to true if you want the script to wait till the process returns. Setting this to false will execute the command in a thread and continue.
 * @example <pre><code> 
 * //Executes someAction.bat $file
 * _execute("someAction.bat"); </code></pre>
 */
function _execute(){};
/**
 * _assertContainsText will assert that an element contains the given text_assertContainsText will log failures to the playback logs if the condition evaluates to false.DO NOT USE THIS IN AN IF CONDITION as it does not return any value, and throws an exception if the condition is false
 * @param {string} expectedText Text expected to be present. This can be replaced with a regular expression.
 * @param {element} element html dom element on where the text is to be found
 * @param {string} message Message to be written to logs if text was not present
 * @example <pre><code>
 * _assertContainsText("Invalid Login", _div("login_section"), "Text was not present");</code></pre>
 * @example <pre><code>
 * _assertContainsText(/Invalid/i, _div("login_section"), "Text was not present");</code></pre>
 * @example <pre><code>
 * _assertContainsText("Invalid Login", _div("login_section"));</code></pre>
 * @example <pre><code>
 * _assertContainsText(/Invalid/i, _div("login_section")); </code></pre>
 */
function _assertContainsText(){};
/**
 * _enableKeepAlive() turns on Keep-Alive. It is used in conjunction with _disableKeepAlive() on pages which hang because of flash objects or applets.
 * @example <pre><code> 
 * _disableKeepAlive();
 * _call(loadPageWithFlashWhichHangsOtherwise());
 * _enableKeepAlive();</code></pre>
 */
function _enableKeepAlive(){};
/**
 * _disableKeepAlive() turns off Keep-Alive. It is used in conjunction with _enableKeepAlive() on pages which hang because of flash objects or applets.
 * @example <pre><code> 
 * _disableKeepAlive();
 * _call(loadPageWithFlashWhichHangsOtherwise());
 * _enableKeepAlive();</code></pre>
 */
function _disableKeepAlive(){};
/**
 * Drags elementToDrag and drops it on the given x, y coordinates. If isRelative is true, drags x,y pixels relative to current position. If isRelative is false, drags to x,y coordinate on browser. 
 * @param {element} draggable HTML Element to be dragged
 * @param {integer} x x coordinate of drop point on the page
 * @param {integer} y y coordinate of drop point on the page
 * @param {boolean} [isRelative] Specifies whether the coordinates are relative to current position of draggable element
 * @example <pre><code>
 * //If _image("item") is located at coordinates (50, 150), it will drag the item and drop it at the coordinate (100, 300)
 * _dragDropXY(_image("item"),  100, 300); </code></pre>
 * @example <pre><code> 
 * //If _image("item") is located at coordinates (50, 150), it will drag the item and drop it at the coordinate (50+100, 150+300)
 * _dragDropXY(_image("item"),  100, 300, true); </code></pre>
 */
function _dragDropXY(){};
/**
 * Deletes cookie with given name.
 * @param {string} name name of cookie
 */
function _deleteCookie(){};
/**
 * Creates a cookie with name and value which will expire in given days.
 * @param {string} name name of cookie
 * @param {string} value Value of cookie
 * @param {integer} days days for which cookie is to remain
 */
function _createCookie(){};
/**
 * resets the value of _printCalled
 */
function _clearPrintCalled(){};
/**
 * Saves the $file which was downloaded into sahi/temp/folder into the given filePath
 * @param {string} filename Name for the downloaded $file
  */
function _saveDownloadedAs(){};
/**
 * Clears the _lastDownloadedFileName (so that new files downloaded with the same fileName can be asserted)	
 */
function _clearLastDownloadedFileName(){};
/**
 * Writes text into a rich text editor based on content-editable iframe
 * @param {element} iframe The iframe in which the editor is present
 * @param {string} text The text to be written
 */
function _rteWrite(){};
/**
 * Types the text into the element. Different from _setValue. _type does not bring or remove focus from element.
 * @param {element} element HTML element in which the text is to be typed
 * @param {string} text The text to be typed
 */
function _type(){};
/**
 * Checks the given checkbox or radio element. If already checked, this API does not do anything.
 * @param {element} checkBoxOrRadioElement The check box or Radio element to check
 */
function _check(){};
/**
 * Unchecks the given checkbox or radio element. If already checked, this API does not do anything.
 * @param {element} checkBoxOrRadioElement The check box or Radio element to check
 */
function _uncheck(){};
/**
 * Removes focus from an element
 * @param {element} element The html element from which the focus is to be removed
 * @example <pre><code>
 * //Removes focus from text box identified as _textbox("abc") by Sahi
 * _blur(_textbox("abc"));</code></pre>
 */
function _blur(){};
/**
 * Removes focus from an element
 * @param {element} element The html element from which the focus is to be removed
 * @example <pre><code>
 * //Removes focus from text box identified as _textbox("abc") by Sahi
 * _removeFocus(_textbox("abc"));</code></pre>
 */
function _removeFocus(){};
/**
 * Clears the value returned by _lastAlert().
 */
function _clearLastAlert(){};
/**
 * Clears the value returned by _lastPrompt().
 */
function _clearLastPrompt(){};
/**
 * Clears the value returned by _lastConfirm().
 */
function _clearLastConfirm(){};
/**
 * Closes the current window. This will work only for popups.
 * @example <pre><code>
 * _popup("popWin")._closeWindow();</code></pre>
 */
function _closeWindow(){};
/**
 * Collects all elements of a particular type and stores them in an array. 
 * @param {string} apiType The API for html elements to be collected
 * @param {string} id identifier for the elements to be collected
 * @param {string} [inEl] location from where the elements are to be collected
 * @example <pre><code>
 * //collects all the links in 'div1' with id containting 'group 1' and stores in $els 
 * var $els = _collect ("_link", "/group 1/", _in(_div("div1"))); </code></pre>
 */
function _collect(){};
/**
 * Collects all elements of a particular type and stores them in an array. 
 * @param {string} apiType The API for html elements to be collected
 * @param {string} id identifier for the elements to be collected
 * @param {string|function} attribute or function identifier for the elements to be collected
 * @param {string} [inEl] location from where the elements are to be collected
 * @example <pre><code>
 * //Fetching a simple attribute from multiple elements
 * // Collect text of divs whose className is menu-item
 * var $menuTexts = _collectAttributes("_div", "menu-item", "sahiText");
 * // or more explicitly
 * var $menuTexts = _collectAttributes("_div", {className:"menu-item"}, "sahiText");
 * // Fetching some synthesized/processed values from multiple elements by executing an inline function for each element
 * // For each div of className menu-item, function will be called and the current div will be passed as $el.
 * var $htmls = _collectAttributes("_div", "menu-item",  function ($el) {return $el.innerHTML;}, _in(_div("navbar")));
 * // Fetching some synthesized/processed values from multiple elements by executing a defined function for each element
 * // getInnerHTML will be called for each element whose attribute we are collecting.
 * function getInnerHTML($el) {
 * return $el.innerHTML;
 * }
 * // For each div of className menu-item, getInnerHTML function will be called and the current div will be passed as $el.
 * var $htmls = _collectAttributes("_div", "menu-item",  getInnerHTML, _in(_div("navbar")));
 * // Fetching some synthesized/processed values from multiple elements by executing nested functions
 * // Notice the use of browser tag for the second level function called from getHTML.
 * <browser>
 * function getInnerHTMLOfParent(el){
 * return el.parentNode.innerHTML;
 * }
 * // This is not inside a browser tag.
 * function getHTML(el) {
 * // calls another function.
 * // The called function should be inside a browser tag,
 * // because of the way Sahi serializes content between proxy and browser.
 * return getInnerHTMLOfParent(el);
 * }
 * var $htmls = _collectAttributes("_div", "menu-item",  getHTML, _in(_div("navbar")));
 * </browser></code></pre>
 */
function _collectAttributes(){};
/**
 * Counts all elements of a particular type and stores them in an array. 
 * @param {string} apiType The API for html elements to be counted
 * @param {string} id identifier for the elements to be counted
 * @param {string} [inEl] location from where the elements are to be counted
 * @example <pre><code>
 * //counts all the links in 'div1' with id containting 'group 1' and stores in $count 
 * var $count = _count ("_link", "/group 1/", _in(_div("div1"))); </code></pre>
 */
function _count(){};
function _re(){};
function _simulateMouseEvent(){};
function _simulateMouseEventXY(){};
function _addToSession(){};
function _startLookInside(){};
function _stopLookInside(){};
function _startHarLogging(){};
function _stopHarLogging(){};
/**
* Reads the data which is stored in the variable by using _readLayoutFile(text_file_path) and validate the page layout
* @param {string} string String which is returned by _readLayoutFile(text_file_path)
* @param {int} pixel pixel value that need to ignore while validating the page layout
* @example <pre><code>
* //Reads the data which is stored in the variable by using _readLayoutFile(text_file_path) and validate the page layout
* var $data = _readLayoutFile("layout.txt");
* _verifyLayout($data, 4);</code></pre>
* @desc _verifyLayout needs 2 arguments first is the data given by the _readLayoutFile API and second is the threshold value. 
* threshold value is the pixel to ignore the html elements structure difference.
* @example <pre><code>
*	$threshold = 4;</code></pre>
* @desc _verifyLayout internally checks if the 2 elements are in same row or line. if the difference of the y co-ordinate of the 1st and 2nd element is less than or equal to 4. Sahi will consider both of the elements are in same row or line 
**/

function _verifyLayout(){};

/**
 * _runUnitTests() executes all functions whose name starts with "test". If functions setUp() and tearDown() are defined, they are executed before and after each test, irrespective of errors in the test functions. 
 * @example <pre><code>
 * function setUp(){
 * _log("In setUp");
 * }
 * function tearDown(){
 *   _log("In tearDown");
 * }
 * function testAddition() {
 *   _assertEqual(3, 1+2);
 * }
 * function testSubtraction() {
 *   _assertEqual(3, 5-2);
 * }
 * function testMultiplication() {
 *   _assertEqual(8, 2*4);
 * }</code></pre>
 * @example <pre><code>
 * // Invoke all tests:
 * _runUnitTests();</code></pre>
 * @example <pre><code>
 * // Invoke only testAddition and testMultiplication
 * // Use this for debugging when you are fixing just one test
 * // and don't want to run all the tests.
 * _runUnitTests(["testAddition", "testMultiplication"]);</code></pre>
 */
function _runUnitTests(){};
/**
 * Defines some conditions to be fulfilled before performing actions on a flex application.
 */

function _setFlexReadyCondition(){};
/**
 * Writes the text into $file at filePath. if overwrite is true, the $file contents are overwritten. Default is false which will append text at the end.
 * @param {string} text The text to write in the $file
 * @param {string} filePath path of the $file
 * @param {boolean} [overwrite] set to true if existing $file is to be averwritten
 */
function _writeFile(){};
/**
 * Same as _writeFile. Writes the text into $file at filePath. if overwrite is true, the $file contents are overwritten. Default is false which will append text at the end.
 * @param {string} text The text to write in the $file
 * @param {string} filePath path of the $file
 * @param {boolean} [overwrite] set to true if existing $file is to be averwritten
 */
function _writeToFile(){};
/**
 * Statements following _maskLogs($msg) will be masked in the logs. (A replacement text will be visible instead.) This is useful when password or other information should not be visible in logs. Masking can be toggled back using _unmaskLogs($endMsg). $startMsg and $endMsg are logged in the reports to help understand what has been masked.
 * @param {string} startMsg MEssage displayed in logs
 * @example <pre><code>
 * _maskLogs("Password Information start");
 * _setValue(_password("password"), "secret");
 * _unmaskLogs("Password Information end");</code></pre>
 */
function _maskLogs(){};
/**
 * Toggles _maskLogs(). Re-enables normal report logging. $endMsg is visible in logs.
 * @param {string} endMsg Message displayed in logs
 */
function _unmaskLogs(){};
/**
 * Deletes the $file at filePath.
 * @param {string} filepath path of the $file to be deleted
 */
function _deleteFile(){};
function _takeSnapShot(){};
/**
 * This will modify the key value pair in the HTTP header being sent to the server, so that all the headers sent further will have this changed value. 
 * @param {string}
 * @param {string}
 * @example <pre><code>
 * //This will set the User-Agent to the value in the variable passed and all further headers will contain this value of User-Agent.
 * _setHttpHeader("User-Agent", $userAgent);</code></pre>
 */
function _setHttpHeader(){};
/**
 * This will add the key value pair in the HTTP header being sent to the server, so that all the headers sent further will also have this new value.
 * @param {string}
 * @param {string}
 * @example <pre><code>
 * //This will add a new Value of New-Agent and also pass this with the HTTP header being sent to the server.
 * _addHttpHeader("New-Agent", $userAgent);</code></pre>
 */
function _addHttpHeader(){};
/**
 * This will remove the key value pair in the HTTP header being sent to the server.
 * @param {string}
 * @example <pre><code>
 * //This will remove the key "User-Agent" from the headers.
 * _removeHttpHeader("User-Agent");</code></pre>
 */
function _removeHttpHeader(){};
/**
 * This will reset the key value pair in the HTTP header being sent to the server.
 * @param {string}
 * @example <pre><code>
 * //This will reset the key "User-Agent" in the headers.
 * _resetHttpHeader("User-Agent");</code></pre>
 */
function _resetHttpHeader(){};
/**
 * Sometimes a webpage may open a new window to show a PDF $file. In this case, we need to ask Sahi to send a HTML response back.
 * @param {boolean} boolean set to true if you want to send a response back
 * @example <pre><code>
 * _sendHTMLResponseAfterFileDownload(true);
 * _click(_link("Show PDF in new Window"));
 *  if (_lastDownloadedFileName() != null) {
 *     _saveDownloadedAs("test.pdf"); //Change this to whatever your download directory is
 * }
 * _clearLastDownloadedFileName();
 * // Close the newly opened window
 * _popup("/.* /")._closeWindow();  </code></pre>
 */
function _sendHTMLResponseAfterFileDownload(){};
/**
 * Brings the current window into focus above the other screens. Used with native events or screen shots. Currently works only on Windows. 
 * @example <pre><code> 
 * // brings window in focus and takes screen shot
 * _focusWindow(); 
 * _takeScreenShot();</code></pre>
 */
function _focusWindow(){};
function _setSpeed(){};
function _disableInfoLogging(){};
function _enableInfoLogging(){};
function _typeNative(){};
function _typeKeyCodeNative(){};
/**
 * Takes a screen shot of the entire screen, and embeds image in reports. Use with _focusWindow to make sure the right window is in focus. 
 * @example <pre><code>
 * //brings current window to focus and takes screenshot
 * _focusWindow();
 * _takeScreenShot();</code></pre>
 */
function _takeScreenShot(){};
function _takeScreenShots(){};
function _takeSnapShots(){};
/**
 * Sets the given window as context for the following Sahi statements. The identifier can be a regular expression. This API helps make scripting easier when most actions are performed on a popup window. 
 * @param {string} popupId Id of the popup to select
 * @example <pre><code>
 * // select popWin
 * _selectWindow("popWin"); 
 * // further statements will be performed on popWin
 * _click(_link("Click me")); // will click on popWin
 * _click(_button("Done")); // will click on popWin
 * _selectWindow(); // select base window
 * // further statements will be performed on base window
 * _click(_button("Finished")); // clicks on base window;</code></pre>
 */
function _selectWindow(){};
/**
 * Returns a handle to the element in different domain. 
 * _selectDomain(identifier) is used to select the domain for statements which need to be executed on another domain but are in the same base window. 
 * _selectDomain() will return to the base domain
 * @param {string} identifier domain name to select
 * @example <pre><code>
 * _selectDomain("www.tytosoftware.com")
 * _click(_link("Link Test"));
 * _setValue(_textbox("q"), "sahi forums");
 * _click(_submit("go"));
 * _selectDomain();</code></pre>
 */
function _selectDomain(){};
/**
 * Performs different actions on browser windows.Allowed actions are
 * <ul>
 * <li>focus</li>
 * <li>maximize</li>
 * <li>minimize</li>
 * <li>restore</li>
 * <li>refresh</li>
 * </ul>
 * @param {string} action The action to be performed 
 * @example <pre><code>
 * //maximize the browser window
 * _windowAction("maximize");</code></pre>
 */
function _windowAction(){};




/**
 * This API just evaluates the string and returns a dom object. 
 * This API is not too useful.
 * @param {string} string Any string to be evaluated
 * @example <pre><code>
 * _accessor("document.formName.elementName").</code></pre>
 * @returns {Node} Dom object
 */
function _accessor(){return new Node();};
/**
 * Returns a handle to html element with 'button' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, value, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _button(){return new Node();};
/**
 * Returns a handle to html element with 'checkbox' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _checkbox(){return new Node();};
/**
 * Returns a handle to html element with 'img' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, title or alt, id, $file name from src
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _image(){return new Node();};
/**
 * Returns a handle to html element with 'img' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, tilte/alt, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _imageSubmitButton(){return new Node();};
/**
 * Returns a handle to html element with 'a' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, visible text, id.
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _link(){return new Node();};
/**
 * Returns a handle to html element with type= "password" and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _password(){return new Node();};
/**
 * Returns a handle to html element with type= "radio" and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _radio(){return new Node();};
/**
 * Returns a handle to html element with select tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _select(){return new Node();};
/**
 * Returns a handle to html element with type= "submit" and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _submit(){return new Node();};
/**
 * Returns a handle to html element with textarea tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _textarea(){return new Node();};
/**
 * Returns a handle to html element with type="text" and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _textbox(){return new Node();};
/**
 * Returns an accesor for form element of type time
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _timebox(){return new Node();};
/**
 * Returns an accesor for form element of type date
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _datebox(){return new Node();};
/**
 * Returns an accesor for form element of type datetime
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _datetimebox(){return new Node();};
/**
 * Returns an accesor for form element of type="datetime-local"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _datetimelocalbox(){return new Node();};
/**
 * Returns an accesor for form element of type="week"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _weekbox(){return new Node();};
/**
 * Returns an accesor for form element of type="month"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _monthbox(){return new Node();};
/**
 * Returns an accesor for form element of type="number"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _numberbox(){return new Node();};
/**
 * Returns an accesor for form element of type="range"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _rangebox(){return new Node();};
/**
 * Returns an accesor for form element of type="tel"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _telephonebox(){return new Node();};
/**
 * Returns an accesor for form element of type="email"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _emailbox(){return new Node();};
/**
 * Returns an accesor for form element of type="url"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _urlbox(){return new Node();};
/**
 * Returns an accesor for form element of type="search"
 * @param {identifier} identifier Index, Id or name
 * @returns {Node}
 */
function _searchbox(){return new Node();};
function _event(){};
/**
 * _getGlobal gets a previously stored variable whose scope will span a session. Globals are used for persisting variables across multiple web pages.
 * @param {string} name Name of the global variable
 */
function _getGlobal(){};
/**
 * Returns a random number between 0 and max
 * @param {number} max The maximum number
 * @returns {Number} The random number generated
 */
function _random(max){return 1;};
/**
 * _savedRandom stores a random number against an id and returns the same number for subsequent invocations in that session. The min and max parameters are only required during the first invocation. Defaults for min and max, if omitted, are 0 and 10000 for the first call for an id.
 * @param {string} id Any string that will be used to hold the number
 * @param {number} min Minimum limit
 * @param {number} max Maximum limit 
 * @deprecated since version 2.0
 * @example <pre><code>
 * //returns a random number between 100, 200; say 145.
 * _savedRandom("login", 100, 200); 
 * //will return 145, 
 * //since it was saved against the id "login". 
 * //The min and max are redundant here.
 * _savedRandom("login", 100, 200); 
 * //will also return 145.
 * _savedRandom("login");</code></pre>
 */
function _savedRandom(){};
/**
 * Returns a handle to html element with 'td' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _cell(){return new Node();};
/**
 * Returns a handle to html element with 'table' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _table(){return new Node();};
/**
 * Returns true if childElement is a child of parentElement
 * @param {element} parentElement The container element
 * @param {element} childElement The element contained
 */
function _contains(){};
/**
 * Returns true if the element contains the given text
 * @param {element} element The element in which the text is to be checked
 * @param {string} text The text to be tested
 * @example <pre><code>
 * //returns true given div has the text "some"
 * _containsText(_div("divId"), "some")</code></pre>
 */
function _containsText(){};
/**
 * Returns true if the element contains the given html 
 * @param {element} element The element in which the text is to be checked
 * @param {string} html The html to be tested
 * @example <pre><code>
 * //returns true given div has the html "some"
 * _containsHTML(_div("divId"), "some")</code></pre>
 */
function _containsHTML(){};
/**
 * This can be used for any tag with an id. This API does not accept regular expressions or indexes.
 * @param {string} id ID of the element to get a handle of 
 * @returns {Node} A handle to the element with give Id
 */
function _byId(){return new Node();};
/**
 * Returns a handle to html element with given xpath and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} xpath xpath expression as string
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _byXPath(){return new Node();};
/**
 * identify element using any selenium identifier.
 * @param {string} seleniumLocater Any selenium locater
 * @example <pre><code>
 * //identifies an element using xpath 
 * _bySeleniumLocator(xpath)</code></pre>
 * @returns {Node} A handle to the element
 */
function _bySeleniumLocator(){return new Node();};
/**
 * Returns a handle to html element with 'tr' tag and given identifier and optionally domRelation. It is used to identify rows with text. Useful to look for cells in a row.  
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier id, className, text, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _row(){return new Node();};
/**
 * Returns the innerText or textContent of an element.
 * @param {element} element html element with innertext 
 * @returns Text inside the element
 */
function _getText(){return new Node();};
/** 
 * Returns the Value of an element.
 */
function _getValue(){return new Node();};
/**
 * Returns the attribute of a particular element.
 */
function _getAttribute(){return new Node();};
/**
 * Same as _getText
 * @deprecated
 */
function _getCellText(){return new Node();};
/**
 * Returns a handle to html element with 'div' tag and given identifier and optionally domRelation. It is used to identify rows with text. Useful to look for cells in a row.  
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier id, className, text, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _div(){return new Node();};
/**
 * Returns a handle to html element with 'span' tag and given identifier and optionally domRelation. It is used to identify rows with text. Useful to look for cells in a row.  
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier id, className, text, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _span(){return new Node();};
/**
 * Returns a handle to html element with 'span' or 'div' tag and given identifier and optionally domRelation. It is used to identify rows with text. Useful to look for cells in a row.  
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier id, className, text, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 * @deprecated
 */
function _spandiv(){return new Node();};
/**
 * Returns a handle to html element with 'option' tag and given identifier and optionally domRelation. It is used to identify rows with text. Useful to look for cells in a row.  
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier id, className, text, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _option(){return new Node();};
/**
 * Returns the message displayed in the last javascript confirm popup.
 */
function _lastConfirm(){};
/**
 * Returns a handle to html element with 'reset' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _reset(){return new Node();};
/**
 * Returns a handle to html element with '$file' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _file(){return new Node();};
/**
 * It is used to connect to a database.
 * @param {class} driver JDBC driver class
 * @param {string} jdbcurl JDBC URL
 * @param {string} username username to connect to the database
 * @param {string} password password to connect to the database
 * @param {object} propertiesObj A java.util.Properties object with relevant key values
 * @example <pre><code>
 * //getting a handle to database 
 * var $db = _getDB("oracle.jdbc.driver.OracleDriver","jdbc:oracle:thin:@dbserver:1521:sid","username", "password");</code></pre>
 * @example <pre><code>
 * //(since v4.3) Constructing through Properties $file
 * var $props = new java.util.Properties();
 * $props.put("user", "scott");
 * $props.put("password", "tiger");
 * $props.put("internal_logon", "sysoper");
 * var $db = _getDB("oracle.jdbc.driver.OracleDriver", "jdbc:oracle:thin:@dbserver:1521:sid", $props);</code></pre>
 */
function _getDB(){};
function _getQC(){};
/**
 * _readFile is used to read text files. Returns the contents of the $file as a single String.
 * @param {string} filepath  Path of $file to read. Can be relative to where Sahi was started from (sahi/bin in most cases)
 * 
 */
function _readFile(){};
/**
 * Reads the content at the specified URL and returns its contents as a string
 * @param {string} url The URL to read
 */
function _readURL(){};
/**
 * Reads a csv $file and returns a 2 dimensional array of the contents. If the separator between words is not a comma, it can be specified as the second parameter.
 * @param {string} filepath path of the csv $file
 * @param {string} [separator] required only if the separator is not comma 
 */
function _readCSVFile(){};
/**
 * Writes a 2 dimensional array into a $file in CSV format, using the given wordSeparator (default is comma)
 * @param {array} array2d two dimensional array to write into csv
 * @param {string} filePath path where $file is to be saved
 * @param {boolean} overwrite set true to overwrite previous $file with same name
 * @param {string} wordSeparator default is comma
 */
function _writeCSVFile(){};
/**
 * Returns information of the current session. The object has properties:
 * <ul>
 * <li>suiteName: name of suite</li>
 * <li>suitePath: Path of suite</li>
 * <li>base: Base url for suite</li>
 * <li>browser: Browser executable path</li>
 * <li>browserOption: browserOption passed to Suite</li>
 * <li>browserProcessName: browserProcessName passed to Suite</li>
 * <li>sessionId: SessionId of suite</li>
 * </ul>
 */
function _suiteInfo(){};
/**
 * Returns the message displayed in the last javascript prompt popup.
 */
function _lastPrompt(){};
/**
 * Returns the message displayed in the last javascript alert popup.
 */
function _lastAlert(){};
function _get(){};
/**
 * Returns the value of the style property for that element.
 * @param {element} element Element whose property is used
 * @param {string} cssProperty CSS property to be used
 */
function _style(){};
/**
 * This can be used for any tag with text to get a handle to that element
 * @param {string} identifier The text which is to be used as identifier
 * @param {string} tagName Name of the tag which is to be looked up
 * @returns {Node} A handle to the element with given text
 */
function _byText(){return new Node();};
/**
 * Returns a handle to the html element with given class name and tag name and optionally with DOM relations
 * @param {string} identifier The class name which is to be considered
 * @param {string} tagName Tag in which the class is to be checked
 * @param {string} [DOMRelation] The relation with other elements in DOM 
 * @returns {Node} A handle to the element  
 */
function _byClassName(){return new Node();};
/**
 * Returns the value of the cookie with cookieName.
 * @param {string} cookieName The name of cookie
 */
function _cookie(){};
/**
 * Returns the an array with the element's x, y coordinate in pixels.
 * @param {element} element The element whose position is required
 */
function _position(){};
function _print(){};
/**
 * Returns true if window.print() had been invoked.
 */
function _printCalled(){};
/**
 * Returns a handle to the lable with given identifier and optionally DOM relation
 * @param {string} identifier id, index, text
 * @param {string} DOMRelation DOM relationship with another element
 * @returns {Node} A handle to the element  
 */
function _label(){return new Node();};
/**
 * Returns the name of last downloaded $file
 */
function _lastDownloadedFileName(){};
/**
 * Returns the html inside a rich text editor. Eg. _rteHTML(_rte("rteId")) will return the rich text editor's contents.
 * @param {element} element The rich text editor element
 */
function _rteHTML(){};
/**
 * Returns the text inside a rich text editor. Eg. _rteText(_rte("rteId")) will return the rich text editor's text content (without the html formatting).
 *  @param {element} element The rich text editor element
 */
function _rteText(){};
function _re(){};
/**
 * Brings up a javascript prompt with given message. Use only while debugging
 * @param {string} message The message to display
 */
function _prompt(){};
/**
 * Returns the name of the current script
 */
function _scriptName(){};
/**
 * Logs an exception. Used in catch block of try-catch.
 * @param {string} exception the exception to be logged
 */
function _logException(){};
/**
 * Logs an exception and stops execution. Used in catch block of try-catch.
 * @param {string} exception the exception to be logged
 */
function _logExceptionAsFailure(){};
/**
 * Returns true if the element is visible on the user interface. Can be used to assert if a mouse over menu has appeared or not.
 * @param {element} element The element whose visibility is to be tested
 */
function _isVisible(){};
/**
 * Returns a handle to html element with 'ul' or 'ol' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _list(){return new Node();};
/**
 * Returns a handle to html element with 'li' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, id, name
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _listItem(){return new Node();};
/**
 * Makes the script stop if an error occurs. This is the default behavior.
 */
function _stopOnError(){};
/**
 * Makes script continue inspite of errors. Can be turned off with _stopOnError()
 */
function _continueOnError(){};
/**
 * Returns the parent node of an element witg given tag
 * @param {element} element The element whose parent node needs to be found
 * @param {string} tagName The html tag whose parent is to be found
 * @param {integer} [occurrence] The nth parent. 1 is the immediate parent.
 * @example <pre><code>
 * //returns the first div parent of link
 * _parentNode(_link("aLink"), "DIV", 1)  </code></pre>
 */
function _parentNode(){return document;};
/**
 * Returns the parent cell of an element
 * @param {element} element The element whose parent node needs to be found
 * @param {integer} [occurrence] The nth parent. 1 is the immediate parent.
 * @returns {Node}
 */
function _parentCell(){return new Node();};
/**
 * Returns the parent row of an element
 * @param {element} element The element whose parent node needs to be found
 * @param {integer} [occurrence] The nth parent. 1 is the immediate parent.
 * @returns {Node}
 */
function _parentRow(){return new Node();};
/**
 * Returns the parent table of an element
 * @param {element} element The element whose parent node needs to be found
 * @param {integer} [occurrence] The nth parent. 1 is the immediate parent.
 * @returns {Node}
 */
function _parentTable(){return new Node();};
/**
 * _in is a DOM relation marker which specifies that the element should be searched inside another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _in(){return new Node();};
/**
 * Returns script path of current script.
 */
function _scriptPath(){};
/**
 * Returns the start time of the execution.
 */
function _scriptStartTime(){};
/**
 * _near is a DOM relation marker which specifies that the element should be searched near another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _near(){return Node();};
/**
 * _under is a DOM relation marker which specifies that the element should be searched under another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _under(){return Node();};
/**
 * _above is a DOM relation marker which specifies that the element should be searched above another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _above(){return Node();};
/**
 * _aboveOrUnder is a DOM relation marker which specifies that the element should be searched either above or under another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _aboveOrUnder(){return Node();};
/**
 * _leftOf is a DOM relation marker which specifies that the element should be searched to the left of another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _leftOf(){return Node();};
/**
 * _rightOf is a DOM relation marker which specifies that the element should be searched to the right of another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _rightOf(){return Node();};
/**
 * _leftOrrightOf is a DOM relation marker which specifies that the element should be searched to the right or left of another element.
 * @param {accessor} accessor Accessor for the element to be set as anchor point or refernece point
 * @returns A handle to the reference point
 */
function _leftOrRightOf(){return Node();};
/**
 * Returns a handle to html element with 'iframe' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, id, name
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _rte(){return Node();};
/**
 * Returns a handle to html element with 'iframe' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, id, name
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _iframe(){return Node();};
/**
 * Returns a handle to html element with 'th' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _tableHeader(){return Node();};
/**
 * Returns a handle to html element with 'h1' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _heading1(){return Node();};
/**
 * Returns a handle to html element with 'h2' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _heading2(){return Node();};
/**
 * Returns a handle to html element with 'h3' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _heading3(){return Node();};
/**
 * Returns a handle to html element with 'h4' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _heading4(){return Node();};
/**
 * Returns a handle to html element with 'h5' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _heading5(){return Node();};
/**
 * Returns a handle to html element with 'h6' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _heading6(){return Node();};
/**
 * Returns a handle to html form element with type="hidden" and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier text, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html form element
 */
function _hidden(){return Node();};
/**
 * Returns the title of page defined in title tags
 * @returns Title of page
 */
function _title(){return Node();};
/**
 * Returns true if the element exists. Same as checking element != null.
 * @param {element} element element whose existence is to be checked
 * @returns true if element exists
 */
function _exists(){return Node();};
/**
 * Returns an array of matching elements. Pattern needs to be a valid regular expression. defaults 
 * @param {string} string the string from which pattern is to be extracted
 * @param {string} pattern the pattern to be extracted
 * @param {boolean} [groupsOnly] returns only the matched groups. False by default or if left blank
 * @example <pre><code>
 * //extracts ["red", "green"] with groupsOnly set to true
 * var $str = "The traffic light changed from red to green";
 * var $pattern = "/from (.*) to (.*)/";
 * var $extracted = _extract($str, $pattern, true);</code></pre>
 * @example <pre><code>
 * //extracts["from red to green","red", "green"] with groupsOnly set to false
 * var $str = "The traffic light changed from red to green";
 * var $pattern = "/from (.*) to (.*)/";
 * var $extracted = _extract($str, $pattern, false);</code></pre>
 */
function _extract(){};
/**
 * Returns a handle to html element with area tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier id, title|alt, href, shape, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _area(){return Node();};
/**
 * Returns a handle to html element with 'map' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier name, id, title, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _map(){return Node();};
/**
 * Returns a handle to html element with 'i' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _italic(){return Node();};
/**
 * Returns a handle to html element with 'b' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _bold(){return Node();};
/**
 * Returns a handle to html element with 'em' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _emphasis(){return Node();};
/**
 * Returns a handle to html element with 'strong' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _strong(){return Node();};
/**
 * Returns a handle to html element with 'pre' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _preformatted(){return Node();};
/**
 * Returns a handle to html element with 'code' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _code(){return Node();};

/**
 * Returns a handle to html element with 'p' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _paragraph(){return Node();};
/**
 * Returns a handle to html element with 'blockquote' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */

function _blockquote(){return Node();};
/**
 * Specifies the coordinates on element where the event is fired. Negative values can be given to specify offset from right and bottom.
 * @param {element} element element where event is to be fired
 * @param {integer} x value in pixels from left
 * @param {integer} y value in pixels from top
 * @example <pre><code>
 * //clicks inside the button, 10px from the left and 20 pixels from the top.
 * _click(_xy(_button("id"), 10, 20))</code></pre>
 * @example <pre><code>
 * // clicks inside the button, 5px from the right and 10px from the bottom.
 *  _click(_xy(_button("id"), -5, -10))</code></pre>
 */
function _xy(){return Node();};
/**
 * Used to fetch the value of a page dependent variable (something that is part of the browser page) and store it in a Sahi variable. 
 * @param {string} element.value Accesor for the element and the value which is to be fetched
 * @example <pre><code>
 * //gets the value of textbox t1
 * var $text = _fetch(_textbox("t1").value);</code></pre>
 */
function _fetch(){};
function _areEqualArrays(){};
/**
 * Returns absolute path to userdata directory, given a relative path. 
 */
function _userDataDir(){};
/**
 * Sets fn as recovery function. The function will be called before the script exists, if and only if there is a failure in the script. It can be turned off with _removeRecovery()
 * This is different from try-catch because we do not want the script to continue; we just want the state of our system to be restored to a sensible point.
 * Any function can be assigned to a script as a recovery function. Once set, if there is an error during execution, the recovery function will be called before the script stops.
 * @param {string} fn The recovery function name
 * @example <pre><code>
 *  * _navigateTo("http://sahi.co.in/demo/");
 * function myRecoveryFn(){
 *   _alert("In myRecoveryFn."); // This statement will be alerted in case of script error.
 * }
 * _setRecovery(myRecoveryFn); // Set the myRecoveryFn as recovery function.
 * _click(_link("Link Test")); // Works normally
 * _click(_link("Bad Link"));  
 * // This statement fails and causes myRecoveryFn to be called. 
 * _alert("done"); 
 * // This statement will not be called, because script failed in the last statement.</code></pre>
 */
function _setRecovery(){};
/**
 * Returns true if browser is Internet Explorer
 */
function _isIE(){};
/**
 * Returns true if browser is Internet Explorer 9
 */
function _isIE9(){};
/**
 * Returns true if browser is Internet Explorer 10
 */
function _isIE10(){};
/**
 * Returns true if browser is Mozilla Firefox
 */
function _isFF(){};
/**
 * Returns true if browser is Mozilla Firefox
 */
function _isFF3(){};
/**
 * Returns true if browser is Mozilla Firefox
 */
function _isFF4(){};
/**
 * Returns true if browser is Google Chrome
 */
function _isChrome(){};
/**
 * Returns true if browser is Safari
 */
function _isSafari(){};
/**
 * Returns true if browser is Opera
 */
function _isOpera(){};
function _isHTMLUnit(){};
/**
 * Removes any recovery function which was set via _setRecovery.
 * @param {string} fn The recovery function name
 */
function _removeRecovery(){};
/**
 * Returns information of the current session. The object has attributes: <ul>
 * <li>isRecording: returns true if recording</li>
 * <li>isPlaying: returns true if playingback</li>
 * <li>isPaused: returns true if playback is paused</li>
 * <li>sessionId: returns Sahi's sessionId</li>
 * <li>threadNumber: returns the threadNumber of browser instance running</li>
 * <li>scriptPath: returns script path of current script. Same as _scriptPath()</li></ul>
 */
function _sessionInfo(){};
/**
 * Renames (or moves) a given $file from oldFilePath to newFilePath. If newFilePath already exists, it will be overwritten
 * @param {string} oldfilePath Path to old $file
 * @param {string} newfilePath Path to new $file
 */
function _renameFile(){};
/**
 * Loops over data2DArray, and invokes function fn with each row of data. The invocation is within a try catch block with exception logging. The core concept is that data is present as a grid of rows and columns, and tests need to run with each row of the grid as input.
 * @param {string} fn The funtion name(without brackets) to be executed with data array
 * @param {array} data2dArray A two dimensional array of data which is used by function
 * @example <pre><code>
 * //executes doAdd with each row in $data
 * function doAdd($first, $second, $total){
 *   _setValue(_textbox("first"), $first);
 *   _setValue(_textbox("second"), $second);
 *   _click(_button("Add"));
 *   _assertEqual($total, _textbox("total").value);
 * }
 * var $data = [
 *         [2, 3, 5],
 *         [1, 2, 4],
 *         [4, 3, 7]
 *         ]
 * _dataDrive(doAdd, $data);</code></pre>
 */ 
function _dataDrive(){};
/**
 * Returns the path to userdata.
 */
function _userDataPath(){};
function _evalOnRhino(){};
/**
 * Returns Success or Failure for current script
 */
function _scriptStatus(){};
/**
 * Same as _f(), used to identify the objects in flex application.
 */
function _flex(){};
/**
 * Returns the absolute path with reference to the present script.
 */
function _stackTrace(){};
/**
 * Includes a $file at runtime based on conditions provided by user in script.
 */
function _dynamicInclude(){};
/**
 * Brings up a javascript confirm with given message. Use only while debugging
 * @param {string} message The message to be displayed on the confirm window
 */
function _confirm(){};
/**
 * Returns the name of the current script
 */
function _resolvePath(){};
function _canvas(){};
/**
 * Used to identify the objects in flex application.
 */
function _f(){};
/**
 * Returns a handle to html element with 'abbr' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _abbr(){};
/**
 * used to define a testcase. Has two methods: start() and end() used to define the start and end of a testcase.
 * @param {string} name Name of the testcase
 * @param {string} description This description will be displayed in the logs 
 * @example <pre><code>
 * //defines a testcase called TC_1 
 * var $t = _testcase("TC_1", "Login");
 * $t.start();
 * _setValue(_textbox("user"), "test");
 * _setValue(_password("password"), "secret");
 * _click(_submit("Login"));
 * $t.end();</code></pre>
 */
function _testcase(){};
/**
 * Returns the element which is in focus.
 */
function _activeElement(){};
/**
 *  Reads an Excel $file and returns a 2 dimensional array of the contents. If the first row is not desired, the third parameter can be set to false. This will ignore the header.
 * @param {string} filepath path to the excel $file
 * @param {string} sheetname Name of the excel sheet
 * @param {boolean} ignoreHeader set false to ignore the first row
 */
function _readExcelFile(){};
/**
 * Returns a handle to html element with 'dl' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _dList(){};
/**
 * Returns a handle to html element with 'dt' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _dTerm(){};
/**
 * Returns a handle to html element with 'dd' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier index, name, id
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _dDesc(){};
function _compareImages(){};
/**
 * Allows manipulation of Excel files. This is a replacement of the older way of accessing excel sheets using 
 * @param {string} excelFilePath path to excel $file
 * @param {string} sheetName name of the sheet to read
 */
function _getExcel(){};
/**
 * Returns a handle to html element with 'applet' tag and given identifier and optionally domRelation
 * Identifiers can either be a numerical index or a property as specified in each case.
 * Identifiers which are not numerical, can either be a string or a javascript regular expression.
 * Identifiers which are strings can also have an index along with them in square brackets as part of the string.
 * @param {string} identifier sahiText, id, className, index
 * @param {accessor} [domRelation] _in, _near or any other DOM relation API
 * @returns A handle to html element
 */
function _applet(){};
function _a(){};
function _svg_rect(){};
function _svg_tspan(){};
function _svg_circle(){};
function _svg_ellipse(){};
function _svg_line(){};
function _svg_polygon(){};
function _svg_polyline(){};
function _svg_path(){};
function _svg_text(){};
/**
* Reads the layout text $file and return string
* @param {string} filepath layout $file path
* @example <pre><code>
* //Read the layout text $file and store it in the variable
* var $data = _readLayoutFile("page_layout.txt");</code></pre>
*/
function _readLayoutFile(){};
/**
 * Aborts the scripts and exits.
 */
function _fail(){};
function _includeOnce(){};
/**
 * This API is useful in cases where widgets are dynamically created at multiple locations but only one of them is visible at any given time.
 * During recording Sahi can be forced into either mode by choosing "Strict Visibility On" or "Strict Visibility Off" from the "Other Actions:" dropdown. Make sure you "Append to Script" to add it to the recorded script
 * @param {boolean} boolean set true to enable strict visibilty check
 * @example <pre><code>
 * // make Sahi ignore elements which are not visible.
 * _setStrictVisibilityCheck(true);
 * // make sahi revert to original behavior of considering all elements in the DOM.
 * _setStrictVisibilityCheck(false);</code></pre>
 */
function _setStrictVisibilityCheck(){};
function _assertSnapShot(){};
/**
 * Tells Sahi which AJAX ready states to wait for. By defaults Sahi waits for ready states 1, 2 and 3. 
 * @param {integer} readyState The AJAX ready state to wait for
 * @example <pre><code>
 * //This will wait only for AJAX ready states 2 and 3, but not 1.
 * _setXHRReadyStatesToWaitFor(2,3);</code></pre>
 */
function _setXHRReadyStatesToWaitFor(){};

/**
 * Returns a handle to the window. The identifier can be a regular expression. It is used as a prefix to statements which need to be executed on another window. _popup() can't be used in the middle of a statement. See example for correct usage. 
 * @param {string} identifier WindowName or WindowTitle. It can be a regular expression
 * @return {window} A handle to the window
 * @example <pre><code>
 * //Clicks a link on popup with identifier popWin
 * _popup("popWin")._click(_link("Click me"));</code></pre>
 * @example <pre><code>
 * // WRONG
 * _set($href, _popup("newWindow")._link("my link").href); </code></pre>
 * @example <pre><code>
 * //CORRECT
 * _popup("newWindow")._set($href, _link("my link").href); </code></pre>
 */
function _popup(){return window;};
/**
* Opens a browser with window name and in defined resolution.
* @param {string} [url] Specifies the URL of the page to open. If no URL is specified, a new window with about:blank is opened
* @param {string} [name] Specifies the target attribute or the name of the window.
* @param {array} [resolution] Specifies window resolution.
* @example <pre><code>
* //Opens a browser with window name and in defined resolution, can be use for less than 3 param
* _openWindow("http://sahi.co.in", "defaultSahiPopup", [320,480]);</code></pre>
*/
function _openWindow(){};
/**
 * Opens a browser in the middle of a script.
 * @example <pre><code>
 * //Opens a browser in the middle of a script
 * _openBrowser();</code></pre>
 */
function _openBrowser(){};
/**
 * Closes a browser in the middle of script
 * @example <pre><code>
 * //Closes a browser in the middle of a script
 * _closeBrowser();</code></pre>
 */
function _closeBrowser(){};
/**
 * Returns a handle to the element in different domain. _domain() is used as a prefix to statements which need to be executed on another domain but are in the same base window. 
 * @param {string} identifier Domain name 
 * @example <pre><code>
 * //Clicks on a link present in same base window but coming from www.tytosoftware.com
 * _domain("www.tytosoftware.com")._click(_link("Link Test"));</code></pre>
 */
function _domain(){};
/**
 * _include lets one Sahi script to include another. This helps in organizing code.
 * @param {string} filePath  Path of $file to include. It can be absolute $file path or a path relative to the $file where the script is included.
 */
function _include(){};

function _condition(){return true;};
function _sahi(){};
/**
 * Used to fetch the value of a page dependent variable (something that is part of the browser page) and store it in a Sahi variable.
 * @param {string} $variableName variable to assign the value to
 * @param {string} value value to assign. Note that the value should not be a javascript object which has attributes which reference itself.
 * @example <pre><code>
 * // sets the href of link to variable
 * var $href;
 * _set($href, _link("my link").href); // store
 * // you may do other actions or navigate to other pages
 * _assertEqual("http://sahi.co.in", $href); //use</code></pre>
 */
function _set(){};