// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Stages.find().count() === 0) {
        var data = [
            {name: "Inputs", panelId: 'stageInputs',
                subStages: [
                    {title: "New", panelId: 'subStageNew', tasks: [
                        {
                            taskId: '1',
                            title: 'Task One',
                            description: 'Task',
                            owner: 'ttaylor',
                            stage: 'inputs',
                            subStage: 'subStager'

                        }
                    ]},
                    {title: "Approved", panelId: 'subStageApproved', tasks: []}
                ]
            },
            {name: "Work In Progress", panelId: 'stageWorkInProgress',
                subStages: [
                    {title: "Committed", panelId: 'subStageCommitted', tasks: []},
                    {title: "To Do", panelId: 'subStageToDo', tasks: []},
                    {title: "In Progress", panelId: 'subStageInProgress', tasks: []},
                    {title: "Done", panelId: 'subStageDone', tasks: []},
                    {title: "Removed", panelId: 'subStageRemoved', tasks: []}
                ]
            },
            {name: "Outputs", panelId: 'stageOutputs',
                subStages: [
                    {title: "Done", panelId: 'subStageDone', tasks: []}
                ]
            }
        ];

    }
});
