app = {
  init : function() {
      console.log("init inside app!");
      $("title").text("New title");
      $.getJSON("https://projectx-marconi.firebaseio.com/dronedetail.json")
      .done(app.onSuccess)
      .fail(app.onError);
      
  },
  onSuccess:function(jsonData){
      // processa i dati qui!!!
      console.log(jsonData);
      $("#stanza").text(jsonData.stanza)
      $("#oggetto").text(jsonData.oggetto)
      $("#connessione").text(jsonData.connessione)
      $("#batteria").text(jsonData.batteria)
  },
  
  onError:function(e){
      console.log("error!");
      console.log(JSON.stringify(e));
  }
};



$(document).ready(app.init);