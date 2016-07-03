/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
	"use strict";
	var keyBoardShortCutHelp = "Ctrl-`";
	var keyBoardShortCutContainer = "Ctrl-Shift-B";
	var keyBoardShortCutContainerFluid = "Ctrl-Shift-U";
	var keyBoardShortCutThreeCols = "Ctrl-Shift-E";
	var keyBoardShortCutTable = "Ctrl-Shift-T";
	var keyBoardShortCutContactForm = "Ctrl-Shift-R";
	var keyBoardShortCutJumbotron = "Ctrl-Shift-J";
	var keyBoardShortCutDefaultCard = "Ctrl-Shift-C";
	var keyBoardShortCutCardWoImage = "Ctrl-Shift-I";
	var keyBoardShortCutCardGroup = "Ctrl-Shift-G";
	var keyBoardShortCutCardDeck = "Ctrl-Shift-K";
	var keyBoardShortCutNavbar = "Ctrl-Shift-N";
	var keyBoardShortCutPagination = "Ctrl-Shift-P";
	var keyBoardShortCutPagerAligned = "Ctrl-Shift-A";
	var keyBoardShortCutModal = "Ctrl-Shift-M";
	var keyBoardShortCutCarousel = "Ctrl-Shift-L";
	var CommandManager = brackets.getModule("command/CommandManager");
	var kbManager = brackets.getModule("command/KeyBindingManager");
	var edManager = brackets.getModule("editor/EditorManager");

	//append a container to current editor
	function appendContainer(){
		var snippet = '<div class="container">\n'+
		'	<div class="row">\n'+
		'		<div class="col-xs-6">\n'+
		'		</div>\n'+
		'		<div class="col-xs-6">\n'+
		'		</div>\n'+
		'	</div>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a container-fluid to the current editor
	function appendContainerFluid() {
		var snippet = '<div class="container-fluid">\n'+
		'	<div class="row">\n'+
		'		<div class="col-xs-6">\n'+
		'		</div>\n'+
		'		<div class="col-xs-6">\n'+
		'		</div>\n'+
		'	</div>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a three cols to the current editor
	function appendThreeCols() {
		var snippet = '<div class="container">\n'+
		'	<div class="row">\n'+
		'		<div class="col-sm-4">\n'+
		'		</div>\n'+
		'		<div class="col-sm-4">\n'+
		'		</div>\n'+
		'		<div class="col-sm-4">\n'+
		'		</div>\n'+
		'	</div>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a basic table to the current editor
	function appendTable() {
		var snippet = '<table class="table">\n'+
		'	<thead>\n'+
		'		<tr>\n'+
		'			<th>#</th>\n'+
		'			<th>First Name</th>\n'+
		'			<th>Last Name</th>\n'+
		'			<th>Username</th>\n'+
		'		</tr>\n'+
		'	</thead>\n'+
		'	<tbody>\n'+
		'		<tr>\n'+
		'			<th scope="row">1</th>\n'+
		'			<td>Mark</td>\n'+
		'			<td>Otto</td>\n'+
		'			<td>@mdo</td>\n'+
		'		</tr>\n'+
		'	</tbody>\n'+
		'</table>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a custom contact form to the current editor
	function appendContactForm() {
		var snippet = '<form>'+
		'	<fieldset class="form-group">\n'+
		'		<label for="fullname1">Full Name</label>\n'+
		'		<input type="text" class="form-control" id="fullname1" placeholder="First-name Last-name">\n'+
		'	</fieldset>\n'+
		'	<fieldset class="form-group">\n'+
		'		<label for="email1">Email address</label>\n'+
		'		<input type="email" class="form-control" id="email1" placeholder="Enter email">\n'+
		'		<small class="text-muted">We\'ll never share your email with anyone else.</small>\n'+
		'	</fieldset>\n'+
		'	<fieldset class="form-group">\n'+
		'		<label for="service1">Select a service</label>\n'+
		'		<select class="form-control" id="service1">\n'+
		'			<option>Web Design & Development</option>\n'+
		'			<option>Domain and Hosting</option>\n'+
		'			<option>Web Application</option>\n'+
		'			<option>Mobile Application</option>\n'+
		'			<option>WordPress Support</option>\n'+
		'		</select>\n'+
		'	</fieldset>\n'+
		'	<fieldset class="form-group">\n'+
		'		<label for="message1">Your Message</label>\n'+
		'		<textarea class="form-control" id="message1" rows="3"></textarea>\n'+
		'	</fieldset>\n'+
		'	<button type="submit" class="btn btn-primary">Submit</button>\n'+
		'</form>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a jumbotron to the current editor
	function appendJumbotron() {
		var snippet = '<div class="jumbotron jumbotron-fluid">\n'+
		'	<div class="container">\n'+
		'		<h1 class="display-3">Fluid jumbotron</h1>\n'+
		'		<p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>\n'+
		'	</div>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a default card with image and button to the current editor
	function appendDefaultCard() {
		var snippet = '<div class="card">\n'+
		'	<img class="card-img-top" src="..." alt="Card image cap">\n'+
		'	<div class="card-block">\n'+
		'		<h4 class="card-title">Card title</h4>\n'+
		'		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n'+
		'		<a href="#" class="btn btn-primary">Button</a>\n'+
		'	</div>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a card without image to the current editor
	function appendCardWoImage() {
		var snippet = '<div class="card card-block">\n'+
		'	<h4 class="card-title">Card title</h4>\n'+
		'	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n'+
		'	<a href="#" class="card-link">Card link</a>\n'+
		'	<a href="#" class="card-link">Another link</a>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a card group to the current editor
	function appendCardGroup() {
		var snippet = '<div class="card-group">\n'+
		'	<div class="card">\n'+
		'		<img class="card-img-top" src="..." alt="Card image cap">\n'+
		'		<div class="card-block">\n'+
		'			<h4 class="card-title">Card title</h4>\n'+
		'			<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n'+
		'			<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n'+
		'		</div>\n'+
		'	</div>\n'+
		'	<div class="card">\n'+
		'		<img class="card-img-top" src="..." alt="Card image cap">\n'+
		'		<div class="card-block">\n'+
		'			<h4 class="card-title">Card title</h4>\n'+
		'			<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n'+
		'			<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n'+
		'		</div>\n'+
		'	</div>\n'+
		'	<div class="card">\n'+
		'		<img class="card-img-top" src="..." alt="Card image cap">\n'+
		'		<div class="card-block">\n'+
		'			<h4 class="card-title">Card title</h4>\n'+
		'			<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n'+
		'			<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n'+
		'		</div>\n'+
		'	</div>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a card deck to the current editor
	function appendCardDeck() {
		var snippet = '<div class="card-deck-wrapper">\n'+
		'	<div class="card-deck">\n'+
		'		<div class="card">\n'+
		'			<img class="card-img-top" src="..." alt="Card image cap">\n'+
		'			<div class="card-block">\n'+
		'				<h4 class="card-title">Card title</h4>\n'+
		'				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n'+
		'				<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n'+
		'			</div>\n'+
		'		</div>\n'+
		'		<div class="card">\n'+
		'			<img class="card-img-top" src="..." alt="Card image cap">\n'+
		'			<div class="card-block">\n'+
		'				<h4 class="card-title">Card title</h4>\n'+
		'				<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n'+
		'				<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n'+
		'			</div>\n'+
		'		</div>\n'+
		'		<div class="card">\n'+
		'			<img class="card-img-top" src="..." alt="Card image cap">\n'+
		'			<div class="card-block">\n'+
		'				<h4 class="card-title">Card title</h4>\n'+
		'				<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n'+
		'				<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n'+
		'			</div>\n'+
		'		</div>\n'+
		'	</div>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a responsive navbar to the current editor
	function appendNavbar() {
		var snippet = '<nav class="navbar navbar-light bg-faded">\n'+
		'	<div class="container">\n'+
		'		<button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">&#9776;</button>\n'+
		'		<div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">\n'+
		'			<a class="navbar-brand" href="#">Responsive navbar</a>\n'+
		'			<ul class="nav navbar-nav pull-xs-right">\n'+
		'				<li class="nav-item active">\n'+
		'					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n'+
		'				</li>\n'+
		'				<li class="nav-item">\n'+
		'					<a class="nav-link" href="#">Features</a>\n'+
		'				</li>\n'+
		'				<li class="nav-item">\n'+
		'					<a class="nav-link" href="#">Pricing</a>\n'+
		'				</li>\n'+
		'				<li class="nav-item">\n'+
		'					<a class="nav-link" href="#">About</a>\n'+
		'				</li>\n'+
		'			</ul>\n'+
		'		</div>\n'+
		'	</div>\n'+
		'</nav>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a default pagination to the current editor
	function appendPagination() {
		var snippet = '<nav>\n'+
		'	<ul class="pagination">\n'+
		'		<li class="page-item">\n'+
		'			<a class="page-link" href="#" aria-label="Previous">\n'+
		'				<span aria-hidden="true">&laquo;</span>\n'+
		'				<span class="sr-only">Previous</span>\n'+
		'			</a>\n'+
		'		</li>\n'+
		'		<li class="page-item"><a class="page-link" href="#">1</a></li>\n'+
		'		<li class="page-item"><a class="page-link" href="#">2</a></li>\n'+
		'		<li class="page-item"><a class="page-link" href="#">3</a></li>\n'+
		'		<li class="page-item"><a class="page-link" href="#">4</a></li>\n'+
		'		<li class="page-item"><a class="page-link" href="#">5</a></li>\n'+
		'		<li class="page-item">\n'+
		'			<a class="page-link" href="#" aria-label="Next">\n'+
		'				<span aria-hidden="true">&raquo;</span>\n'+
		'				<span class="sr-only">Next</span>\n'+
		'			</a>\n'+
		'		</li>\n'+
		'	</ul>\n'+
		'</nav>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a pager (aligned) to the current editor
	function appendPager() {
		var snippet = '<nav>\n'+
		'	<ul class="pager">\n'+
		'		<li class="pager-prev"><a href="#">Older</a></li>\n'+
		'		<li class="pager-next"><a href="#">Newer</a></li>\n'+
		'	</ul>\n'+
		'</nav>\n';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a modal to the current editor
	function appendModal() {
		var snippet = '<div class="modal fade">\n'+
		'	<div class="modal-dialog" role="document">\n'+
		'		<div class="modal-content">\n'+
		'			<div class="modal-header">\n'+
		'				<button type="button" class="close" data-dismiss="modal" aria-label="Close">\n'+
		'					<span aria-hidden="true">&times;</span>\n'+
		'				</button>\n'+
		'				<h4 class="modal-title">Modal title</h4>\n'+
		'			</div>\n'+
		'			<div class="modal-body">\n'+
		'				<p>One fine body&hellip;</p>\n'+
		'			</div>\n'+
		'			<div class="modal-footer">\n'+
		'				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n'+
		'			</div>\n'+
		'		</div><!-- /.modal-content -->\n'+
		'	</div><!-- /.modal-dialog -->\n'+
		'</div><!-- /.modal -->\n';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}
	//append a carousel to the current editor
	function appendCarousel() {
		var snippet = '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n'+
		'	<ol class="carousel-indicators">\n'+
		'		<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n'+
		'		<li data-target="#carousel-example-generic" data-slide-to="1"></li>\n'+
		'		<li data-target="#carousel-example-generic" data-slide-to="2"></li>\n'+
		'	</ol>\n'+
		'	<div class="carousel-inner" role="listbox">\n'+
		'		<div class="carousel-item active">\n'+
		'			<img src="..." alt="First slide">\n'+
		'		</div>\n'+
		'		<div class="carousel-item">\n'+
		'			<img src="..." alt="Second slide">\n'+
		'		</div>\n'+
		'		<div class="carousel-item">\n'+
		'			<img src="..." alt="Third slide">\n'+
		'		</div>\n'+
		'	</div>\n'+
		'	<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\n'+
		'		<span class="icon-prev" aria-hidden="true"></span>\n'+
		'		<span class="sr-only">Previous</span>\n'+
		'	</a>\n'+
		'	<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\n'+
		'		<span class="icon-next" aria-hidden="true"></span>\n'+
		'		<span class="sr-only">Next</span>\n'+
		'	</a>\n'+
		'</div>';

		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(snippet, insertionPos);
		}
	}

	function showHelp(){
		window.alert(
			"Ctrl-Shift-B : Container"+"\n"+
			"Ctrl-Shift-U : Container Fluid"+"\n"+
			"Ctrl-Shift-E : Three Columns Example"+"\n"+
			"Ctrl-Shift-T : Basic Table"+"\n"+
			"Ctrl-Shift-R : Custom Contact Form"+"\n"+
			"Ctrl-Shift-J : Jumbotron"+"\n"+
			"Ctrl-Shift-C : Default Card"+"\n"+
			"Ctrl-Shift-I : Card without Image"+"\n"+
			"Ctrl-Shift-G : Card Group"+"\n"+
			"Ctrl-Shift-K : Card Deck"+"\n"+
			"Ctrl-Shift-N : Navbar"+"\n"+
			"Ctrl-Shift-P : Pagination"+"\n"+
			"Ctrl-Shift-A : Pager Aligned"+"\n"+
			"Ctrl-Shift-M : Modal"+"\n"+
			"Ctrl-Shift-L : Carousel"
		);
	}

	var COMMAND_ID_H = "bootstrap4snippets.help";
	var COMMAND_ID_B = "bootstrap4snippets.getContainer";
	var COMMAND_ID_U = "bootstrap4snippets.getContainerFluid";
	var COMMAND_ID_E = "bootstrap4snippets.getThreeCols";
	var COMMAND_ID_T = "bootstrap4snippets.getTable";
	var COMMAND_ID_R = "bootstrap4snippets.getContactForm";
	var COMMAND_ID_J = "bootstrap4snippets.getJumbotron";
	var COMMAND_ID_C = "bootstrap4snippets.getDefaultCard";
	var COMMAND_ID_I = "bootstrap4snippets.getCardWoImage";
	var COMMAND_ID_G = "bootstrap4snippets.getCardGroup";
	var COMMAND_ID_K = "bootstrap4snippets.getCardDeck";
	var COMMAND_ID_N = "bootstrap4snippets.getNavbar";
	var COMMAND_ID_P = "bootstrap4snippets.getPagination";
	var COMMAND_ID_A = "bootstrap4snippets.getPager";
	var COMMAND_ID_M = "bootstrap4snippets.getModal";
	var COMMAND_ID_L = "bootstrap4snippets.getCarousel";

	CommandManager.register("Help", COMMAND_ID_H, showHelp);
	kbManager.addBinding(COMMAND_ID_H, keyBoardShortCutHelp);

	CommandManager.register("Container", COMMAND_ID_B, appendContainer);
	kbManager.addBinding(COMMAND_ID_B, keyBoardShortCutContainer);

	CommandManager.register("ContainerFluid", COMMAND_ID_U, appendContainerFluid);
	kbManager.addBinding(COMMAND_ID_U, keyBoardShortCutContainerFluid);

	CommandManager.register("ThreeCols", COMMAND_ID_E, appendThreeCols);
	kbManager.addBinding(COMMAND_ID_E, keyBoardShortCutThreeCols);

	CommandManager.register("Table", COMMAND_ID_T, appendTable);
	kbManager.addBinding(COMMAND_ID_T, keyBoardShortCutTable);

	CommandManager.register("ContactForm", COMMAND_ID_R, appendContactForm);
	kbManager.addBinding(COMMAND_ID_R, keyBoardShortCutContactForm);

	CommandManager.register("Jumbotron", COMMAND_ID_J, appendJumbotron);
	kbManager.addBinding(COMMAND_ID_J, keyBoardShortCutJumbotron);

	CommandManager.register("DefaultCard", COMMAND_ID_C, appendDefaultCard);
	kbManager.addBinding(COMMAND_ID_C, keyBoardShortCutDefaultCard);

	CommandManager.register("CardWoImage", COMMAND_ID_I, appendCardWoImage);
	kbManager.addBinding(COMMAND_ID_I, keyBoardShortCutCardWoImage);

	CommandManager.register("CardGroup", COMMAND_ID_G, appendCardGroup);
	kbManager.addBinding(COMMAND_ID_G, keyBoardShortCutCardGroup);

	CommandManager.register("CardDeck", COMMAND_ID_K, appendCardDeck);
	kbManager.addBinding(COMMAND_ID_K, keyBoardShortCutCardDeck);

	CommandManager.register("Navbar", COMMAND_ID_N, appendNavbar);
	kbManager.addBinding(COMMAND_ID_N, keyBoardShortCutNavbar);

	CommandManager.register("Pagination", COMMAND_ID_P, appendPagination);
	kbManager.addBinding(COMMAND_ID_P, keyBoardShortCutPagination);

	CommandManager.register("Pager", COMMAND_ID_A, appendPager);
	kbManager.addBinding(COMMAND_ID_A, keyBoardShortCutPagerAligned);

	CommandManager.register("Modal", COMMAND_ID_M, appendModal);
	kbManager.addBinding(COMMAND_ID_M, keyBoardShortCutModal);

	CommandManager.register("Carousel", COMMAND_ID_L, appendCarousel);
	kbManager.addBinding(COMMAND_ID_L, keyBoardShortCutCarousel);
});
