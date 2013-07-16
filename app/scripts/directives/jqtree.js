angular.module('YiClosetApp')
	.directive('jqtree', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				//$(element).toolbar(scope.$eval(attrs.toolbarTip));

				element.dynatree({
				  onActivate: function(node) {
				    // A DynaTreeNode object is passed to the activation handler
				    // Note: we also get this event, if persistence is on, and the page is reloaded.
				    alert("You activated " + node.data.title);
				  },
				  children: [
				    {title: "Item 1"},
				    {title: "Folder 2", isFolder: true, key: "folder2",
				      children: [
				        {title: "Sub-item 2.1"},
				        {title: "Sub-item 2.2"}
				      ]
				    },
				    {title: "Item 3"}
				  ]
				});
        	}
			
		}
	});