# learnProcessingP5
## This repository is all about learning how to setup and run Processing and p5.js projects in VSCode without using Processing's IDE.
### I'm just way to0 used to my extentions is all :)

<br/>
<br/>

# Steps to running p5 projects in VSCode
- Open up the command palette and select `Create p5.js Project`.
- Write your code in the `sketch.js` file generated.

<br/>
<br/>

# Steps to running Processing projects in VSCode

- First create a directory with `<dir_name>` as its name and `cd` into it.

- Then create a `<dir_name.pde>` file in that directory which will be your main processing project.

###### Note: The name of the file needs to be the same as the parent directory

- Next open up the command palette and run, `Processing: Create Task File`.
    - This creates a `.vscode` config file that stores relevant information about the processing project.
    - *This step is needed only once every project.*

- Lastly, to run the processing project, i.e., the `.pde` file, open up the command palette and run, `Processing: Run Processing Project`.
    - Alternatively, use the shortcut, `Ctrl + Shift + B` to build and run the `.pde` file.

<br/>
<br/>

# Steps to running Processing projects in Python mode in VSCode

- First create a directory with `<dir_name>` as its name and `cd` into it.

- Then copy the `processing-py.jar` file from `C:\Users\Volt\Documents\processing.py-windows64\processing.py-3017-windows64` (on my local machine) and paste that copy into the same directory.
    - This can be done by running this in the powershell:
        - `cd processingPy` 
        - `cp C:\Users\Volt\Documents\processing.py-windows64\processing.py-3017-windows64\processing-py.jar`

- Create a python file with your processing code in python mode. Save it as a `.py` file.

- To run the file, open up the terminal in that directory and run, 
`java -jar processing-py.jar <file_name.py>`

### Note:
When committing and pushing code to GitHub, be sure to not include the `processing-py.jar` file in the staging area.
