// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Stages.find().count() === 0) {
        var data = [
            {title: "Inputs", panelId: 'stageInputs',
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
            {title: "Work In Progress", panelId: 'stageWorkInProgress',
                subStages: [
                    {title: "Committed", panelId: 'subStageCommitted', tasks: []},
                    {title: "To Do", panelId: 'subStageToDo', tasks: []},
                    {title: "In Progress", panelId: 'subStageInProgress', tasks: []},
                    {title: "Done", panelId: 'subStageDone', tasks: []},
                    {title: "Removed", panelId: 'subStageRemoved', tasks: []}
                ]
            },
            {title: "Outputs", panelId: 'stageOutputs',
                subStages: [
                    {title: "Done", panelId: 'subStageDone', tasks: []}
                ]
            }
        ];


        for (var i = 0; i < data.length; i++) {
            var list_id = Stages.insert(data[i]);
        }
    }
});
