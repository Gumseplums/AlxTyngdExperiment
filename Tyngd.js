
const NextBtn  = document.getElementById("NextButton");
const BackBtn  = document.getElementById("BackButton");
const ParaText = document.getElementById("ParagraphText");

const Inst = document.getElementById("Instruction");
const InstTitle = document.getElementById("InstructionTitle");
const InstText = document.getElementById("InstructionText");

let Step = 0;

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

NextBtn.addEventListener('click', () => {
    
    if (Step == 0) {
        NextBtn.innerHTML = 'Nästa';
        BackBtn.style.display='block';
        ParaText.style.display='none';
        Inst.style.display='block';

        img1.style.display="inline-block"
        img1.src="Images/Bottle.png"

        img2.style.display="inline-block"
        img2.src="Images/Scissors.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/Tape.png"  
        
        img4.style.display="inline-block"
        img4.src="Images/Thread.png"

        Step ++

        console.log(Step);
    }
    else if (Step == 1) {
        InstTitle.innerHTML = 'Steg 1';
        InstText.innerHTML = 'Cut the bottle in half. You will only require the bottom half.<br><br>(This is where using a knife can be easier than a scissor)';

        img1.style.display="none"
        img1.src="Images/Bottle.png"

        img2.style.display="inline-block"
        img2.src="Images/BottleHalf.png"  
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"

        Step ++

        console.log(Step);        
    }
    else if (Step == 2) {
        InstTitle.innerHTML = 'Steg 2';
        InstText.innerHTML = 'Now cut it shorter but leave out 4 strips as "legs" for the bottle.<br>This is where you can use a pen/marker to trace it out. The leg strips should be evenly spaced out.<br><br>Be sure to not make the legs too thin as that will give it bad stability, possibly causing it to fall over too easy. Dont make it too thick either, as the spaces are essential for the model to work.';

        img1.style.display="none"
        img1.src="Images/Bottle.png"

        img2.style.display="inline-block"
        img2.src="Images/BottleLegs.png"  
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"
                
        Step ++

        console.log(Step);        
    }
    else if (Step == 3) {
        InstTitle.innerHTML = 'Steg 3';
        InstText.innerHTML = 'Get the string/yarn and cut two threads of it slightly longer than the diameter of the bottle.';

        img1.style.display="inline-block"
        img1.src="Images/2 Threads.png"

        img2.style.display="inline-block"
        img2.src="Images/BottleLegs.png"  
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"
                        
        Step ++

        console.log(Step);        
    }
    else if (Step == 4) {
        InstTitle.innerHTML = 'Steg 4';
        InstText.innerHTML = 'Tape/glue the threads horizontally inside the bottle. Make sure they thread is centered vertically. The two thread will create an X in the middle of the bottle.<br><br> This is Tyngd Punkten.';

        img1.style.display="inline-block"
        img1.src="Images/BottleStringXTop.png"  

        img2.style.display="inline-block"
        img2.src="Images/BottleStringX.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/Tape.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"

        Step ++

        console.log(Step);        
    }
    else if (Step == 5) {
        InstTitle.innerHTML = 'Steg 5';
        InstText.innerHTML = 'Cut another longer thread of yarn/string. This time it will need to be slightly longer than the length between Tygnd punktet (where the previous threads create an X) and the ground.';

        img1.style.display="inline-block"
        img1.src="Images/BottleStringXTop.png"  

        img2.style.display="inline-block"
        img2.src="Images/BottleStringX.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/Thread.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"

        Step ++

        console.log(Step);        
    }
    else if (Step == 6) {
        InstTitle.innerHTML = 'Steg 6.5';
        InstText.innerHTML = 'This is an optional BUT recommended part of the instructions. Tie a bead to the end of the thread to make it heavier. The bead should end up hanging near the ground, but it should NOT touch.';

        img1.style.display="inline-block"
        img1.src="Images/Thread.png" 

        img2.style.display="inline-block"
        img2.src="Images/BottleStringX.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/BeadOnThread.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Bead.png"

        Step ++

        console.log(Step);        
    }
    else if (Step == 7) {
        InstTitle.innerHTML = 'Steg 7';
        InstText.innerHTML = 'Tie the newly cut thread to the other two threads, specifically where they meet to make an X. Aka, Tyngd Punkten. Remember that the bead should preferably not touch the ground.';

        img1.style.display="none"
        img1.src="Images/BottleFinished.png"

        img2.style.display="none"
        img2.src="Images/BottleFinished.png" 
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="none"
        img4.src="Images/BottleFinished.png"

        img5.style.display="inline-block"
        img5.src="Images/BottleFinished.png"        

        Step ++

        console.log(Step);        
    }
    else if (Step == 8) {
        InstTitle.innerHTML = 'Finished!';
        InstText.innerHTML = 'Youve finished the model! But you are likely wondering what this weird bottle, thread, mix craft is. WELL!<br><br>The bottle is the object. The X thread inside the bottle, which is hopefully centered, is just to give the actual Tyngt Punkten something to hang onto. The hanging string is the "arrow" that shows where the weight is going. So, if Ive done this correctly, when the bead goes outside the object(waterbottle) should loose balance<br><br>I hope it works, I see no reason why is shouldnt. I may have gotten a liiiiittle overboard with this very simple assignment. I hope I understood the assignment correctly too.<br><br>If I could put in more time into this, I would make it cleaner, fix bugs, add more and better images, and put in effort to write all this in Swedish';

        NextBtn.style.display='none'
        Step ++

        console.log(Step);        
    }              

});

BackBtn.addEventListener('click', () => {
    
    if (Step == 1) {
        NextBtn.innerHTML = 'Börja';
        BackBtn.style.display='none';
        ParaText.style.display='block';
        Inst.style.display='none';

        img1.style.display="inline-block"
        img1.src="Images/Bottle.png"

        img2.style.display="inline-block"
        img2.src="Images/Scissors.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/Tape.png"  
        
        img4.style.display="inline-block"
        img4.src="Images/Thread.png"

        Step --

        console.log(Step);
    }
    else if (Step == 2) {
        InstTitle.innerHTML = 'Steg 1';
        InstText.innerHTML = 'Cut the bottle in half. You will only require the bottom half.<br><br>(This is where using a knife can be easier than a scissor)';

        img1.style.display="none"
        img1.src="Images/Bottle.png"

        img2.style.display="inline-block"
        img2.src="Images/BottleHalf.png"  
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"

        Step --

        console.log(Step);        
    }
    else if (Step == 3) {
        InstTitle.innerHTML = 'Steg 2';
        InstText.innerHTML = 'Now cut it shorter but leave out 4 strips as "legs" for the bottle.<br>This is where you can use a pen/marker to trace it out. The leg strips should be evenly spaced out.<br><br>Be sure to not make the legs too thin as that will give it bad stability, possibly causing it to fall over too easy. Dont make it too thick either, as the spaces are essential for the model to work.';

        img1.style.display="none"
        img1.src="Images/Bottle.png"

        img2.style.display="inline-block"
        img2.src="Images/BottleLegs.png"  
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"
                
        Step --

        console.log(Step);        
    }
    else if (Step == 4) {
        InstTitle.innerHTML = 'Steg 3';
        InstText.innerHTML = 'Get the string/yarn and cut two threads of it slightly longer than the diameter of the bottle.';

        img1.style.display="inline-block"
        img1.src="Images/2 Threads.png"

        img2.style.display="inline-block"
        img2.src="Images/BottleLegs.png"  
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"
                        
        Step --

        console.log(Step);        
    }
    else if (Step == 5) {
        InstTitle.innerHTML = 'Steg 4';
        InstText.innerHTML = 'Tape/glue the threads horizontally inside the bottle. Make sure they thread is centered vertically. The two thread will create an X in the middle of the bottle.<br><br> This is Tyngd Punkten.';

        img1.style.display="inline-block"
        img1.src="Images/BottleStringXTop.png"  

        img2.style.display="inline-block"
        img2.src="Images/BottleStringX.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/Tape.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"

        Step --

        console.log(Step);        
    }
    else if (Step == 6) {
        InstTitle.innerHTML = 'Steg 5';
        InstText.innerHTML = 'Cut another longer thread of yarn/string. This time it will need to be slightly longer than the length between Tygnd punktet (where the previous threads create an X) and the ground.';

        img1.style.display="inline-block"
        img1.src="Images/BottleStringXTop.png"  

        img2.style.display="inline-block"
        img2.src="Images/BottleStringX.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/Thread.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Scissors.png"

        Step --

        console.log(Step);        
    }
    else if (Step == 7) {
        InstTitle.innerHTML = 'Steg 6.5';
        InstText.innerHTML = 'This is an optional BUT recommended part of the instructions. Tie a bead to the end of the thread to make it heavier. The bead should end up hanging near the ground, but it should NOT touch.';

        img1.style.display="inline-block"
        img1.src="Images/Thread.png" 

        img2.style.display="inline-block"
        img2.src="Images/BottleStringX.png"  
        
        img3.style.display="inline-block"
        img3.src="Images/BeadOnThread.png"
        
        img4.style.display="inline-block"
        img4.src="Images/Bead.png"

        Step --

        console.log(Step);        
    }
    else if (Step == 8) {
        InstTitle.innerHTML = 'Steg 7';
        InstText.innerHTML = 'Tie the newly cut thread to the other two threads, specifically where they meet to make an X. Aka, Tyngd Punkten. Remember that the bead should preferably not touch the ground.';

        img1.style.display="none"
        img1.src="Images/BottleFinished.png"

        img2.style.display="none"
        img2.src="Images/BottleFinished.png" 
        
        img3.style.display="none"
        img3.src="Images/Scissors.png"
        
        img4.style.display="none"
        img4.src="Images/BottleFinished.png"

        img5.style.display="inline-block"
        img5.src="Images/BottleFinished.png"        

        NextBtn.style.display=''        
        Step --

        console.log(Step);        
    }
    else if (Step == 9) {
        InstTitle.innerHTML = 'Finished!';
        InstText.innerHTML = 'Youve finished the model! But you are likely wondering what this weird bottle, thread, mix craft is. WELL!<br><br>The bottle is the object. The X thread inside the bottle, which is hopefully centered, is just to give the actual Tyngt Punkten something to hang onto. The hanging string is the "arrow" that shows where the weight is going. So, if Ive done this correctly, when the bead goes outside the object(waterbottle) should loose balance<br><br>I hope it works, I see no reason why is shouldnt. I may have gotten a liiiiittle overboard with this very simple assignment. I hope I understood the assignment correctly too.<br><br>If I could put in more time into this, I would make it cleaner, fix bugs, add more and better images, and put in effort to write all this in Swedish';

        NextBtn.style.display='none'
        Step --

        console.log(Step);        
    } 
});
