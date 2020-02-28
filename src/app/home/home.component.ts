import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  Onclick() {
    var collapse1 = <HTMLButtonElement>(
      document.getElementById("navbarNavDropdown")
    );
    collapse1.style.display = "block";
    var bttnclick1 = <HTMLButtonElement>document.getElementById("onclick1");
    bttnclick1.style.display = "block";
    var bttnclick = <HTMLButtonElement>document.getElementById("onclick");
    bttnclick.style.display = "none";
  }
  Onclick1() {
    var collapse1 = <HTMLButtonElement>(
      document.getElementById("navbarNavDropdown")
    );
    collapse1.style.display = "none";
    var bttnclick1 = <HTMLButtonElement>document.getElementById("onclick1");
    bttnclick1.style.display = "none";
    var bttnclick = <HTMLButtonElement>document.getElementById("onclick");
    bttnclick.style.display = "block";
  }

  ngOnInit(): void {}
}
window.onload = () => {
  var obj = new HomeComponent();
  var bttnclick = <HTMLButtonElement>document.getElementById("onclick");
  bttnclick.onclick = function() {
    obj.Onclick();
  };
  var bttnclick1 = <HTMLButtonElement>document.getElementById("onclick1");
  bttnclick1.onclick = function() {
    obj.Onclick1();
  };
};
