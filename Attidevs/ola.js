function figure(number){
 if(number >0){
    return "Positive"
} else if(number ==0){
    return "Zero"
} else if(number <0){
   return  "Negative"
}
}
undefined
figure(0)
'Zero'
figure(1)
'Positive'
figure(-3)
'Negative'


function hour(time){
    if(time <12){
        return "Good morning"
    } else if(time >12 && time <17){
        return "Good afternoon"
    } else if(time >17){
        return "Good evening"
    }
}
undefined
hour(11)
'Good morning'
hour(13)
'Good afternoon'
hour(15)
'Good afternoon'
hour(20)
'Good evening'


function grade(score){
     if(score >=90){
         return "Excellent"
     } else if(score >=70 && score <=89){
         return "Good"
     } else if(score >=50 && score <=69){
         return "Pass"
     } else if(score <50){
         return "Fail"
     }
 }
undefined
grade(100)
'Excellent'
grade(80)
'Good'
grade(87)
'Good'
grade(60)
'Pass'
grade(67)
'Pass'
grade(50)
'Pass'
grade(45)
'Fail'

function condition(weather){
    if(weather =="rainy"){
        return "Take an umbrella"
    } else if(weather =="sunny"){
        return "Wear sunscreen"
    } else if(weather =="cold"){
        return "Dress warm"
    }
}
undefined
condition("rainy")
'Take an umbrella'
condition("sunny")
'Wear sunscreen'
condition("cold")
'Dress warm'

function check(age){
    if(age <13){
        return "Child"
    } else if(age >=13 && age <=19){
        return "Teenager"
    } else if(age >=20 && age <=64){
        return "Adult"
    } else if (age >=65){
        return "Senior"
    }
}
    

undefined
check(10)
'Child'
check(14)
'Teenager'
check(19)
'Teenager'
check(25)
'Adult'
check(60)
'Adult'
check(100)
'Senior'


function  check(day){
 if(day =="Saturday" || day =="Sunday"){
        return "Weekend"
} else if(day =="Otherwise"){
    return "Weekday"
}
}

undefined
check("Saturday")
'Weekend'
check("Sunday")
'Weekend'
("Otherwise")
'Otherwise'
check("")
undefined
check("Otherwise")
'Weekday'

function  check(Signal){
 if(Signal =="green"){
        return "Go"
} else if(Signal =="yellow"){
    return "Slow down"
 } else if(Signal =="red"){
    return "Stop"
}
}
undefined
check("green")
'Go'
check("yellow")
'Slow down'
check("red")
'Stop'


function check(role){
    if(role =="admin"){
        return "Welcome Admin"
    } else if(role =="editor"){
        return "Welcome Editor"
    } else if(role =="viewer"){
        return "Welcome Viewer"
    } else{
        return "Role not recognized"
    }
}
undefined
check("Doctor")
'Role not recognized'
check("HR")
'Role not recognized'
check("admin")
'Welcome Admin'
check("editor")
'Welcome Editor'
check("viewer")
'Welcome Viewer'


function check(Attendance){
    if(Attendance ==100){
        return "Perfect Attendance"
    } else if(Attendance >=75){
        return "Good Attendance"
    } else if(Attendance <75){
        return "Low Attendance"
    }
}
undefined
check(100)
'Perfect Attendance'
check(95)
'Good Attendance'
check(0.5)
'Low Attendance'