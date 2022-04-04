const url = 'https://www2.hs-esslingen.de/~melcher/internet-technologien/quiz/'

window.addEventListener("load", function(event) {
    quiz.init();
  });

const quiz = {
    init() {
        const token = null;
        const themes = [];
        const chapters = [];
        const quiz = [];
        const theme = null;
        const themeName = null;
        const chapter = null;
        const summary = null;
        var chapterMessage = null;
        var waitMessage = null;
        var typeAnswerChecked = null;
        const body = document.body;
        //const page = this.makePage(0);
        //body.appendChild(page);
        //this.showPages();
        this.showStatePage("notLoggedIn");
    },

    showStatePage(state){
        switch (state) {
            case "notLoggedIn":
                this.showLogin();
                break;
            case "loggingIn":
                this.waitMessage = "Logging in...";
                this.showWaitscreen();
                break;
            case "loginError":
                this.showLogin();
                window.confirm("UserID/Password are incorrect!");
                break;
            case "loadingThemes":
                this.waitMessage = "Loading themes...";
                this.showWaitscreen();
                break;
            case "loadingChapters":
                this.waitMessage = "Loading chapters...";
                this.showWaitscreen();
                break;
            case "selectTheme":
                this.chapterMessage = "Please select a theme";
                this.showChapterSelection();
                break;
            case "selectChapter":
                this.chapterMessage = "Please select a chapter";
                this.showChapterSelection();
                break;
            case "loadingNewQuiz":
                this.waitMessage = "Loading new quiz...";
                this.showWaitscreen();
                break;
            case "loadingQuiz":
                this.waitMessage = "Loading quiz...";
                this.showWaitscreen();
                break;
            case "solveQuiz":
                this.showQuiz();
                break;
            case "validatingAnswers":
                this.waitMessage = "Validating answers...";
                this.showWaitscreen();
                break;
            case "answerRight":
                this.typeAnswerChecked = "correct";
                this.showResult();
                break;
            case "answerWrong":
                this.typeAnswerChecked = "wrong";
                this.showResult();
                break;
            case "loadingSummary":
                this.waitMessage = "Loading summary...";
                this.showWaitscreen();
                break;
            case "summary":
                this.showSummary();
                break;
            case "networkError":
                console.log("ERROR: Failed to establish communication between client and server!\nPlease reload!");
                break;
            default:
                alert("Alert: Reading the state was faulty!");
                break;
        }
    },

    // showPages(){
    //     const arrayPages = [this.showLogin,this.showWaitscreen,
    //         this.showChapterSelection,this.showWaitscreen,
    //         this.showQuiz,this.showWaitscreen,
    //         this.showResult,this.showWaitscreen,
    //         this.showSummary,this.showWaitscreen]

    //     var index = 0
    //     setInterval(() => {
    //         arrayPages[index].call(this);
    //         console.dir(index);
    //         index++;
    //         if (index > arrayPages.length-1) {
    //             index = 0
    //             console.dir("start again...");
    //         }
    //     },2000)
    // },

    showLogin(){
        document.body.replaceChildren();
        this.makePage(0);
    },

    showWaitscreen(){
        document.body.replaceChildren();
        this.makePage(1);
    },

    showChapterSelection(){
        document.body.replaceChildren();
        this.makePage(2);
    },

    showQuiz(){
        document.body.replaceChildren();
        this.makePage(3);
    },

    showResult(){
        document.body.replaceChildren();
        this.makePage(4);
    },

    showSummary(){
        document.body.replaceChildren();
        this.makePage(5);
    },

    makeHeader() {
        const divHeader = document.createElement("div");
        divHeader.classList.add("pagecontainer","header");
        const header = document.createElement("header");
        divHeader.appendChild(header);

        const divHeaderContent = document.createElement("div");
        divHeaderContent.className = "divHeader";
        const h1 = document.createElement("h1");
        h1.className = "quiz-main-page-title";
        h1.innerText = "Quiz";
        const quizDescription = document.createElement("p");
        quizDescription.className = "quiz-main-page-description";
        quizDescription.innerText = "Knowledge Quiz By Robert Fesko";

        divHeaderContent.appendChild(h1);
        divHeaderContent.appendChild(quizDescription);
        header.appendChild(divHeaderContent);

        return divHeader;
    },

    makeFooter() {
        const divFooter = document.createElement("div");
        divFooter.classList.add("pagecontainer","footer");
        const footer = document.createElement("footer");
        footer.classList.add("limiter","pagecontainer","footer");
        footer.style.margin = "auto";
        footer.innerHTML = "Copyright &copy 2022 by Robert Fesko";
        divFooter.appendChild(footer);
        return divFooter;
    },

    makePage(page) {
        const divPage = document.createElement("div");
        divPage.className = "page";

        const header = this.makeHeader();
        divPage.appendChild(header);

        const main = this.makeMain(page);
        divPage.appendChild(main);

        const footer = this.makeFooter();
        divPage.appendChild(footer);

        document.body.appendChild(divPage);
    },

    makeMain(page) {
        const divMain = document.createElement("div");
        divMain.classList.add("pagecontainer","main");


        /*----- CREATION OF EACH PAGE IS HERE -----*/
        var currentpage = document.createElement("main");

        switch (page) {
            case 0:
                currentpage = this.makeMainLogin();
                break;
            case 1:
                currentpage = this.makeMainWaitscreen();
                break;
            case 2:
                currentpage = this.makeMainChapterSelection();
                break;
            case 3:
                currentpage = this.makeMainQuiz();
                break;
            case 4:
                currentpage = this.makeMainResultPage();
                break;
            case 5:
                currentpage = this.makeMainSummaryPage();
                break;
            default:
                break;
        }

        divMain.appendChild(currentpage);
        return divMain;
    },

    makeMainLogin() {
        const main = document.createElement("main");
        main.classList.add("contentcontainer");
        

        const loginTitle = document.createElement("h2");
        main.appendChild(loginTitle);
        loginTitle.innerText = "Login";

        const login = this.pageLoginFieldSet();
        main.appendChild(login);
        return main;
    },

    makeMainWaitscreen() {
        const main = document.createElement("main");
        main.classList.add("contentcontainer","ws");
        
        const waitscreen = document.createElement("div");
        waitscreen.className = "waitscreen";
        main.appendChild(waitscreen);

        const wsArea = document.createElement("div");
        wsArea.className = "ws-area";
        waitscreen.appendChild(wsArea);

        const circle = document.createElement("div");
        circle.className = "ws-circle";
        wsArea.appendChild(circle);

        const text = document.createElement("div");
        text.className = "ws-text";
        text.innerText = this.waitMessage;
        wsArea.appendChild(text);

        return main;
    },

    makeMainChapterSelection() {
        const chapterMain = document.createElement("main");
        chapterMain.className = "cs-contentcontainer";
        const chapterContainer = this.makeChapterContent();
        const selectors = this.makeChapterbar();
        chapterMain.appendChild(selectors);
        chapterMain.appendChild(chapterContainer);        
        return chapterMain;
    },

    makeChapterContent() {        
        const actionmessage = document.createElement("div");
        actionmessage.className = "actionmessage";
        const message = document.createElement("p");
        message.className = "messageWaitscreen";
        message.innerText = this.chapterMessage;
        actionmessage.appendChild(message);
        return actionmessage;
    },

    makeChapterbar(){
        const chapterbar = document.createElement("div");
        chapterbar.className = "chapterbar";

        const chapterbarlimiter = document.createElement("div");
        chapterbarlimiter.classList.add("chapterbar","limiter");

        const chapterSelector = this.makeSelect("select-chapter");

        const optionChapter = this.makeOption("opt","Chapter");
        optionChapter.disabled = true;
        optionChapter.selected = true;

        chapterSelector.appendChild(optionChapter);

        const themeSelector = this.makeSelect("select-theme");
        
        const optionTheme = this.makeOption("opt","Theme");
        optionTheme.disabled = true;
        optionTheme.selected = true;
        themeSelector.appendChild(optionTheme);

        this.themes.forEach(theme => {
            newOption = this.makeOption(theme.id,theme.name);
            themeSelector.appendChild(newOption);
        });

        themeSelector.addEventListener('change',()=> this.onThemeSelect(themeSelector));
        chapterSelector.addEventListener('change',()=> this.onChapterSelect(chapterSelector));

        if(this.chapterMessage == "Please select a chapter"){
            for(let chapter of this.chapters){
                newChapter = this.makeOption(chapter.id,chapter.name);
                chapterSelector.appendChild(newChapter);
            }
        }
        
        chapterbarlimiter.appendChild(chapterSelector);
        chapterbarlimiter.appendChild(themeSelector);
        chapterbar.appendChild(chapterbarlimiter);

        return chapterbar;
    },

    makeMainQuiz() {
        const mainQuizContainer = document.createElement("main");
        mainQuizContainer.className = "contentcontainer quiz";

        const quizContent = document.createElement("div");
        quizContent.className = "quiz-content";

        const question = document.createElement("h1");
        question.innerText = this.quiz.question;

        const answers = document.createElement("div");
        answers.className = "quiz-answers";

        for(let answer of this.quiz.answers){
            const answerNew = this.makeAnswerCheckbox(answer.id,answer.text);
            answers.appendChild(answerNew);
        }

        const submitBtn = document.createElement("input");
        submitBtn.className = "submit-btn";
        submitBtn.type = "Submit";
        submitBtn.value = "Send";

        submitBtn.addEventListener('click',()=> this.validateAnswers());

        quizContent.appendChild(question);
        quizContent.appendChild(answers);
        quizContent.appendChild(submitBtn);

        mainQuizContainer.appendChild(quizContent);
        return mainQuizContainer;
    },

    makeAnswerCheckbox(id,text){
        const div = document.createElement("div");
        div.className = "checkBoxAnswer";
        
        const inputCheckbox = document.createElement("input");
        inputCheckbox.setAttribute("id",id);
        inputCheckbox.type = "checkbox";
        inputCheckbox.className = "inputCheckBox";
        
        const inputText = document.createElement("label");
        const txtToString = text.toString();
        inputText.innerHTML = txtToString;

        div.appendChild(inputCheckbox);
        div.appendChild(inputText);
        return div;
    },

    makeMainResultPage(){
        const mainResult = document.createElement("main");
        mainResult.className = "result";

        const resultcontent = document.createElement("div");
        resultcontent.className = "resultecontent";

        const resultArea = document.createElement("div");
        resultArea.className = "result-area";

        const resultMark = document.createElement("div");
        resultMark.className = "result-mark";

        const mark = this.makeMark(this.typeAnswerChecked);
        
        resultMark.appendChild(mark);
        resultArea.appendChild(resultMark);
        resultcontent.appendChild(resultArea);

        const div = document.createElement("div");
        const resultControl = document.createElement("div");
        resultControl.classList.add("result","controls");

        var reset = false;
        if (this.quiz.actual < this.quiz.total-1) {
            if (this.typeAnswerChecked === "wrong") {
                const resetBtn = this.makeInput("submit-btn","submit","Reset");
                resetBtn.value = "Reset";
                resetBtn.addEventListener('click', () => this.quizRepeat());
                resultControl.appendChild(resetBtn);
                reset = true;
            }
            const nextBtn = this.makeInput("submit-btn","submit","Submit");
            nextBtn.value = "Next";
            if (reset) {
                
            }else{
                
            }            
            nextBtn.addEventListener('click', () => this.quizNext());
            resultControl.appendChild(nextBtn);
        }else{
            if (this.typeAnswerChecked === "wrong") {
                const resetBtn = this.makeInput("submit-btn","submit","Reset");
                resetBtn.value = "Reset";
                resetBtn.addEventListener('click', () => this.quizRepeat());
                resultControl.appendChild(resetBtn);
            }
            const summaryBtn = this.makeInput("submit-btn","submit","Summary");
            summaryBtn.value = "Summary";
            summaryBtn.addEventListener('click', () => this.quizSummary());
            resultControl.appendChild(summaryBtn);
        }
        
        div.appendChild(resultControl);

        mainResult.appendChild(resultcontent);
        mainResult.appendChild(div);
        return mainResult;
    },

    makeMainSummaryPage() {
        const total = this.summary.total;
        const known = this.summary.known;
        const failed = total - known;
        const percentFailed = Math.round((failed/total)*100);
        const percentSucceded = 100-percentFailed;
        // const degreesFailed = percentFailed/100 * 360;
        // const degreesSucceded = 360 - degreesFailed;

        var pieAnimVariables = document.querySelector(':root');
        pieAnimVariables.style.setProperty('--percentFailed', `${percentFailed}%`);
        pieAnimVariables.style.setProperty('--percentSucceded', `${percentSucceded}%`);

        const main = document.createElement("main");
        main.className = "summary";

        const summaryContent = document.createElement("div");
        summaryContent.className = "summarycontent";

        const summaryArea = document.createElement("div");
        summaryArea.className = "summary-area";

        const summaryPie = document.createElement("div");
        summaryPie.className = "summary-pie";

        const pieForm = document.createElement("div");
        pieForm.className = "pie-form";
        pieForm.setAttribute("id","pieForm");

        const labelPassed = document.createElement("div");
        labelPassed.className = "label-passed";
        labelPassed.innerText = `${100-percentFailed}% correct`;

        const labelNotPassed = document.createElement("div");
        labelNotPassed.className = "label-notpassed";
        labelNotPassed.innerText = `${percentFailed}% wrong`;

        this.animateValue(labelNotPassed, 0, percentFailed, 3000, "wrong");
        this.animateValue(labelPassed, 100, 100-percentFailed, 3000, "correct");

        const pieSubject = document.createElement("div");
        pieSubject.className = "pie-subject";

        const pieTitle = document.createElement("span");
        pieTitle.setAttribute("id", "pie-title");
        pieTitle.innerText = this.getThemeName();

        const pieTopic = document.createElement("span");
        pieTopic.setAttribute("id", "pie-topic");
        pieTopic.innerText = this.getChapterName();

        const replayBtn = this.appendReplayBtn();

        pieForm.appendChild(labelPassed);
        pieForm.appendChild(labelNotPassed);
        summaryPie.appendChild(pieForm);
        summaryArea.appendChild(summaryPie);
        summaryContent.appendChild(summaryArea);
        pieSubject.appendChild(pieTitle);
        pieSubject.appendChild(pieTopic);
        main.appendChild(summaryContent);
        main.appendChild(pieSubject);
        main.appendChild(replayBtn);
        return main;
    },

    makeMark(type) {
        const mark = document.createElement("div");
        const typeToString = type.toString();
        if (typeToString == "correct") {
            mark.className = "result-mark_correct";
        }else if (typeToString == "wrong") {
            mark.className = "result-mark_wrong";
        } else {
            mark.innerText = "Error reading mark type!";
        }
        return mark;
    },

    appendReplayBtn(){
        const button = this.makeInput("submit-btn","submit","Replay");
        button.value = "Replay";
        button.className = "submit-btn replayBtn";
        button.addEventListener('click', () => this.quizReplay());
        return button;
    },

    pageLoginFieldSet() {
        const loginForm = document.createElement("div");
        loginForm.className = "login-form";

        const form = document.createElement("form");
        form.className = "content";
        loginForm.appendChild(form);

        const inputs = document.createElement("div");
        inputs.className = "inputs";
        form.appendChild(inputs);

        const button = this.makeInput("submit-btn","submit","Submit");
        // button.disabled = true;

        const inputName = this.makeInput("userid-input","text","userid","User ID (min. 5 chars)");
        inputName.minLength = "5";
        inputName.required = true;
        const inputPassword = this.makeInput("pass-input","password","password","Password (min. 5 chars)");
        inputPassword.minLength = "5";
        inputPassword.required = true;

        const buttonEnabler = () => {
            button.disabled = !inputName.reportValidity() || !inputPassword.reportValidity(); 
        }

        inputName.addEventListener(InputEvent,buttonEnabler);
        inputPassword.addEventListener(InputEvent,buttonEnabler);
        button.addEventListener("click",() => this.pageLoginSend(inputName.value,inputPassword.value));

        form.appendChild(button);
        inputs.appendChild(inputName);
        inputs.appendChild(inputPassword);

        return loginForm;
    },

    makeInput(classname,type,name,placeholder){
        const input = document.createElement("input");
        input.className = classname;
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
        return input;     
    },

    makeOption(id,text){
        const option = document.createElement("option");
        const id_value = id.toString();
        option.setAttribute("id",id_value);
        option.innerText = text;
        return option;
    },

    makeSelect(id){
        const select = document.createElement("select");
        const id_value = id.toString();
        select.setAttribute("id",id_value);
        return select;
    },

    //  LAB 3
    FetchAndDecode(requestString){
        return fetch(url+`?`+requestString).then(Response => {return Response.json();})
    },

    pageLoginSend(userid,password){
        this.showStatePage("loggingIn");

        this.FetchAndDecode(`request=login&userid=${userid}&password=${password}`).then(data =>{
            if (data.status == "error") {
                this.showStatePage("loginError");
            }else{
                this.token = data.token;
                this.loadThemes();
            }
        })
        .catch(Response => {
            this.showStatePage("networkError");
        })
    },

    loadThemes(){
        this.showStatePage("loadingThemes");
        this.FetchAndDecode(`request=getthemes&token=${this.token}`).then(data =>{
            this.themes = data.themes;
            this.showStatePage("selectTheme");
        })
        .catch(Response =>{
            this.showStatePage("networkError");
        })
    },

    onThemeSelect(themeSelector){
        this.theme = themeSelector.options[themeSelector.selectedIndex].id;
        this.showStatePage("loadingChapters");
        this.FetchAndDecode(`request=gettheme&theme=${this.theme}&token=${this.token}`).then(data =>{
            this.chapters = data.chapters;
            this.showStatePage("selectChapter");
        })
        .catch(Response =>{
            this.showStatePage("networkError");
        })
    },

    onChapterSelect(chapterSelector){
        this.chapter = chapterSelector.options[chapterSelector.selectedIndex].id;
        this.showStatePage("loadingNewQuiz");
        this.FetchAndDecode(`request=getquiz&theme=${this.theme}&chapter=${this.chapter}&token=${this.token}`)
        .then(data =>{
            this.quiz = data.quiz;
            this.showStatePage("solveQuiz");
        })
        .catch(Response =>{
            this.showStatePage("networkError");
        })
    },

    validateAnswers(){
        const checkedElements = document.querySelectorAll('input[type="checkbox"]:checked');
        const validateAnswers = Array.from(checkedElements).map(Node => Node.id).join(",");
        this.showStatePage("validatingAnswers");
        this.FetchAndDecode(`request=validateanswer&selected=${validateAnswers}&token=${this.token}`)
        .then(data =>{
            if (data.decision) {
                this.showStatePage("answerRight");
            }else{
                this.showStatePage("answerWrong");
            }
        })
        .catch(Response =>{
            this.showStatePage("networkError");
        })
    },

    quizRepeat(){
        this.showStatePage("loadingQuiz");
        this.FetchAndDecode(`request=getsamequiz&token=${this.token}`)
        .then(data =>{
            this.quiz = data.quiz;
            this.showStatePage("solveQuiz");
        })
        .catch(Response =>{
            this.showStatePage("networkError");
        })
    },

    quizNext(){
        this.showStatePage("loadingQuiz");
        this.FetchAndDecode(`request=getnextquiz&token=${this.token}`)
        .then(data =>{
            this.quiz = data.quiz;
            this.showStatePage("solveQuiz");
        })
        .catch(Response =>{
            this.showStatePage("networkError");
        })
    },

    quizReplay(){
        this.showStatePage("selectTheme");
    },

    quizSummary(){
        this.showStatePage("loadingSummary");
        this.FetchAndDecode(`request=getsummary&token=${this.token}`)
        .then(data =>{
            this.summary = {known: data.known,total: data.total};
            this.showStatePage("summary");
        })
        .catch(Response =>{
            this.showStatePage("networkError");
        })
    },

    getChapterName(){
        for (let chapter of this.chapters) {
            if (chapter.id == this.chapter) {
                return chapter.name;
            }
        }
    },

    getThemeName(){
        for (let theme of this.themes) {
            if (theme.id == this.theme) {
                return theme.name;
            }
        }
    },

    animateValue(obj, start, end, duration, answertype) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          if (answertype === "wrong") {
            obj.innerHTML = Math.floor(progress * (end - start) + start) + "% wrong";
          }else{
            obj.innerHTML = Math.floor(progress * (end - start) + start) + "% correct";
          }
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
    }
}