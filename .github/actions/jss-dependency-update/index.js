const core = require('@actions/core');
 
async function run() { 
  /*
  What they Actually do:
    @actions/exec - Utility to execute the commandline script.
    @actions/github - Interact with Github API

    In this scenario, whenver there is change in package.json file we will raise PR.
    1.Parse Input
      1.1 base-branch form which check for  updates
      1.2 Target Branch to use create the PR
      1.3 Git Hub token for authentication purpose
      1.4 Working Directory for which we check for dependencies 
    2. Execute the npm update command inside the working directory
        2.1 in our case is 14-artifacts/reac-app, run npm update
           1469  Packege are added
    3. Check whether there are modifieed files, create PR 
    4. If there are modified files, create PR
      4.1 Add and commit the file to target-branch
      4.2 Create PR to base branch using  octokit API
    5. Otherwise , conclude the custom actions 
  */
  core.info('I am a custom JS action');
}
 
run();