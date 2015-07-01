var TodoPage = function () {

    this.navigateTo = function () {
        _navigateTo($BASE_URL + "todo");
    };

    this.isAt = function () {
        return _isVisible(_heading3(/Todo List .* Keeping track of tasks/));
    };


    this.clearAllItems = function () {
        _click(_submit("Clear All Items"));
    };
    
    this.hasNoTasks = function () {
        return _isVisible(_div("No tasks..."));
    };

    this.pending  = function () {
        var regex = /([0-9]+)\040Pending/;
        var text = _getText(_span(regex));
        var match = regex.exec(text);
        return match[1];
    };

    this.completed = function () {
        var regex = /([0-9]+)\040Completed/;
        var text = _getText(_span(regex));
        var match = regex.exec(text);
        return match[1];
    };

    this.addTask = function ($title, $description) {
        _setValue(_textbox(1), $title);
        if ($description) {
            _setValue(_textarea(1), $description);
        }
        _click(_submit("Add Todo"));
    };

    this.getTask = function ($title) {

        var _exists = function () {
            return _isVisible(_span($title));
        };

        var _update = function ($newTitle, $newDescription) {
            _click(_span(/todo-edit/, _near(_span($title))))
            _setValue(_textbox(1), $newTitle);
            if ($newDescription) {
                _setValue(_textarea(0), $newDescription);
            }
            _click(_submit("Edit Todo"));
        };

        var _markCompleted = function () {
            _click(_span("fa fa-check", _near(_span($title))));
        };

        var _remove = function () {
            _click(_span(0, _in(_link("× " + $title))));
        };

        return {
            exists: _exists,
            update: _update,
            markCompleted: _markCompleted,
            remove: _remove
        }
    };
};