# This is a readme file. This usually contains information of the project, and how to run it locally. Now I will provide a small tutorial of a task I want you all to do. Since our idea revolves around a Node.js backend server and fronted, I want all of you to create a super simple node.js server, to see how it works, and deploy it to git to your own branch, to learn a bit of github handling too.

The steps I want everyone to take:
  0. SETUP:
    - Everyone should download a code editor. For node.js I suggest Visual Studio Code: https://code.visualstudio.com/
    - Install git on you local computer: https://gitforwindows.org/ (I assume everyone is using windows, if you are using linux: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - For node.js you need to install Node as well: https://nodejs.org/en/download/prebuilt-installer. I would suggest downloading the v20.14.0(LTS) version.
    - Once this is done, I want you to create a folder locally on your computer, in which your local code will be. Once this folder is created, open it using Visual Studio Code (it should be empty)
    - Open a terminal in Visual Studio Code, and type in the following command:
        git clone https://github.com/peterbajko/dpit-initial-repo.git
        (alternatively you can get this link from the github repository, click on the green code button on the repository page, and select the https link)
  1. CREATE YOUR OWN BRANCH:
    # A git repository contains the source code of a project we are running. The "master" branch contains the current version of the code. If we want to make changes, or add to the existing code, we need to create another branch, do our changes, make sure it is correct, and only then merge them into master.
    - As a first step, I want all of you to create your own branch. Open your local repository folder in VS Code, open a terminal and type the following command:
        git checkout -b "branch_name"
    # git checkout switches your current branch. The -b option specifies that this is a new branch (If you want to create a branch that is the option you have to use). If you want to go back to master, simply type "git checkout master". Notice that you don't need the -b option anymore, because the branch already exists.
    - I want all of you to create your own local branch, and name it after your name (Mine would be "peter-bajko" for example).
    - Once this is done, your branch is created, and you can start working in it. (Note that this branch exists only locally on your computer for now, you have to push it once to appear in the Remote Repository)
  2. TEST THE CODE:
    - If everything is set up correctly, you can run the code with the following command:
        npm start
    # this is specified inside the package.json, you can see inside the scripts, the "start" command is associated with "src/main.js", our entry point script
    - Try to understand how this code works
    - The expected result should be this:
        Server is running on http://localhost:6000
    - Now if you open a browser, and try to reach localhost:6000 in the URL bar, you should get the following result:
        My first server!
  3. YOUR PART:
    - For this first part I want something very simple from all of you. I want you to change the text the server returns to your name. (Really simple)
    - Once this is done, I want you to push your changes in your branch to the Remote Repository. You can look into this tutorial https://www.w3schools.com/git/default.asp?remote=github, but I will summarize what you need to do.
    - Once you have saved your changes, you can see the files changed with the command "git status"
    - If you've confirmed that the correct files are tracked, you can add them to commit using the command "git add -A" (this will add all the files changed)
    - If you try "git status" again, you can see the files have been staged
    - Now with the command "git commit -m "Commit message"" you can commit the changes staged
    - Finally, you have to push the changes to the Remote repository. You can push all the commited changes with the command:
        git push
    # Note that if you are pushing for the first time, you might need to use the "git push --set-upstream origin your_branch_name" command instead. You only need to use this the first time, when your local branch does not exist in the Remote repository yet.

# And with this you should be done. Please note that the scope of this exercise is to set up most of the necessery environments, start to get familiar with running a node.js server and start to get accustomed to using git. If you are already familiar with these technologies, feel free to use whatever you like (eg. Sourcetree for git handling etc.) Note that I do not want you to merge your branch into master, at the end of this exercise I want to see 6 branches next to master, 1 from each of you. 