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

var projects = [{title:'Logo IDE',
				 subtitle:'',
				 description:'A simple Logo IDE with Turtle graphics.',
				 image:'logo.png',
				 link:'../mitchellsha.github.io/logo.html'},
				 {title:'Chess AI',
				 subtitle:'',
				 description:'Play chess against an AI, with a friend, or by yourself. AI utilizes Minimax and Alpha-Beta algorisms as well as some expimental techniques.',
				 image:'chess.png',
				 link:'https://github.com/elizabethdye/ChessAI',
				 assignment:'http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project3/'},
				{title:'Q-Learning Obstacle Avoider',
				 subtitle:'',
				 description:'Simulates a robot that learns to avoid walls and obstacles.',
				 image:'qlearner.png',
				 link:'',
				 assignment:'http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project7/'},			
				{title:'Character Classifier',
				 subtitle:'',
				 description:'Learns to recognize individual, hand-written characters using a selection of machine learning methods.',
				 image:'handwriting.png',
				 link:'',
				 assignment:'http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project6/'},
				{title:'Maze Solver',
				 subtitle:'',
				 description:'Simulates an "explorer" navigating a randomly generated maze. Features a list of selectable heuristics to utilize in navigation.',
				 image:'maze.png',
				 link:'',
				 assignment:'http://ozark.hendrix.edu/~ferrer/courses/335/f15/projects/project1/'},
				{title:'The Elf Game',
				 subtitle:'',
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