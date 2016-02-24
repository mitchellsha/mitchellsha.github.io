var template = '' +
        '<div class="row">' +
            '<div class="col-md-7">' +
                '<a>' +
                    '<img class="img-responsive" src="screenshots/IMAGE.EXT" alt="">' +
                '</a>' +
            '</div>' +
            '<div class="col-md-5">' +
                '<h3>TITLE</h3>' +
                '<h4>SUBTITLE</h4>' +
                '<p>DESCRIPTION</p>' +
                '<a class="btn btn-primary" href="LINK" target="_blank">View Project <span class="glyphicon glyphicon-chevron-right"></span></a>' +
            '</div>' +
        '</div>' +
		'<hr>';

var projects = [{title:'Chess AI',
				 subtitle:'',
				 description:'<a href="http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project3/" target="_blank">Assignment Description</a>',
				 image:'chess.png',
				 link:'https://github.com/elizabethdye/ChessAI'},
				{title:'Text Recognition AI',
				 subtitle:'',
				 description:'Recognizes individual, hand-written characters using a selection of methods.<br/><a href="http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project6/" target="_blank">Assignment Description</a>',
				 image:'handwriting.png',
				 link:''},
				{title:'Maze Solver',
				 subtitle:'',
				 description:'An "explorer" navigates a randomly generated maze. Features a list of selectable heuristics to utilize in navigation.<br/><a href="http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project1/" target="_blank">Assignment Description</a>',
				 image:'maze.png',
				 link:''},
				{title:'Q-Learning Obstacle Avoider',
				 subtitle:'',
				 description:'<a href="http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project7/" target="_blank">Assignment Description</a>',
				 image:'qlearner.png',
				 link:''},
				{title:'The Elf Game',
				 subtitle:'A children\'s holiday game',
				 description:'Just a prototype promotional game I made for work. :) It\'s not done yet and likely never will be.',
				 image:'elfgame.png',
				 link:'../mitchellsha.github.io/Elf%20Game_files/Elf%20Game.htm'}];

$(window).ready(function () {
	for(var i = 0; i < projects.length; i++){
		var proj = projects[i];
		var temp = new String(template);
		temp = temp.replace("IMAGE.EXT",proj.image);
		temp = temp.replace("TITLE",proj.title);
		temp = temp.replace("SUBTITLE",proj.subtitle);
		temp = temp.replace("DESCRIPTION",proj.description);
		temp = temp.replace("LINK",proj.link);
		//console.log(temp);
		$('#projList').append(temp);
	}
});