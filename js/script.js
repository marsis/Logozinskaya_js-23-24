require.config({
    baseUrl:'js/modules',
    paths: {
        "jquery"        : "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min"
    },
    shim: {
        
        'tmpl': {
            export: 'tmpl'
        } 
    }
});
require(
    [
        'tmpl',
        'jquery',
        'Model',
        'View',
        'Controller'
    ],
    function (tmpl,$, Model, View, Controller) {
        
        $(function () {
            var firstToDoList = ['Task1', 'Big Task2 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 'Task3', 'Task4', 'Task5'];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);
    