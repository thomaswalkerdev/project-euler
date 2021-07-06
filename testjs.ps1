$ChallengeNumber = Read-Host -Prompt 'Input the challenge number'
Invoke-Expression("node " + $ChallengeNumber + '/' + $ChallengeNumber + '.js')