# Exercise 03 - CREATE
## Question - 01
**Why do we listen for data and end events when handling POST?**

In Node.js, POST data doesn’t arrive in a single block—it comes in chunks. So we use the data event to gather those chunks as they arrive. Once all the data has
been received, the end event is triggered. That’s when we know the full body is ready, and we can safely parse or use it. Without listening to both events, we might miss some data or process it too early.

---

## Question - 02
**What would happen if we didn’t buffer the body correctly?**

If we don’t properly collect and combine the chunks of data from the POST request, we could end up with incomplete, broken, or incorrect data. This could cause issues like storing only part of someone’s name, failing to parse the form, or even crashing the app if the expected format isn’t matched. It’s like trying to read a message before the sender finishes typing.

---

## Question - 03
**What is the format of form submissions when using the default browser form POST?**

When you use a regular HTML 'form' with method="POST", the browser sends the form data in a format called application/x-www-form-urlencoded by default. This means all form fields are encoded into a string format, like **name=nika**, which looks like query parameters but in the request body instead of the URL.

--- 

## Question - 04
**Why do we use fs.appendFile instead of fs.writeFile?**

We use fs.appendFile because it adds new data to the end of the file without deleting what's already there. If we used fs.writeFile, it would overwrite the file each time a new form is submitted, and we’d lose the previous submissions. With appendFile, we can keep a growing list of all form entries.

--- 

## Question - 05
**How could this be improved or made more secure?**

To improve and secure this code, we could first validate the form input to prevent empty or malicious data. Then, instead of saving to a plain text file, we could store the data in a database like MongoDB or MySQL, which is safer and more structured. Also, using HTTPS would encrypt the form data during transmission. Lastly, limiting request size and sanitizing inputs helps protect against attacks like injection or denial of service.