import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './GisMeteo.css';



function GisMeteo() {
    const styles0 = {
        width:239, height:154
    }
    const styles = {
        width: '24',
        height: '24'
    };
    const styles1 = {
        align:"middle", border:"0", width:"11", height:"16"
    }
    const styles2 = {
        border:"0", align:"middle", left: 5, top:1
    }
    const styles3 = {
        border:"0", align:"middle", top: "auto"
    }
   
  return(
     
      <>
   
    
    <div id="gsInformerID-AKqncIMgTmb615" className="gsInformer" style={styles0}>
        <div className="gsIContent">
            <div id="cityLink">
                <a href="https://www.gismeteo.ru/weather-yestosadok-323488/" target="_blank" title="Погода в Эстосадоке">
                    <img src="https://ost1.gismeteo.ru/assets/flat-ui/img/gisloader.svg" style={styles} alt="Погода в Эстосадоке"></img>
                </a>
                </div>
            <div className="gsLinks">
                <table>
                    <tr>
                        <td>
                            <div className="leftCol">
                                <a href="https://www.gismeteo.ru/" target="_blank" title="Погода">
                                    <img alt="Погода" src="https://ost1.gismeteo.ru/assets/flat-ui/img/logo-mini2.png" style={styles1} ></img>
                                    <img src="https://ost1.gismeteo.ru/assets/flat-ui/img/informer/gismeteo.svg" style={styles2}></img>
                                </a>
                                </div>
                                <div className="rightCol">
                                    <a href="https://www.gismeteo.ru/weather-yestosadok-323488/2-weeks/" target="_blank" title="Погода в Эстосадоке на 2 недели">
                                        <img src="https://ost1.gismeteo.ru/assets/flat-ui/img/informer/forecast-2weeks.ru.svg" style={styles3} alt="Погода в Эстосадоке на 2 недели"></img>
                                    </a>
                                </div>
                            </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  
    <Helmet>
                <meta charSet="utf-8" />
               
                <script async src="https://www.gismeteo.ru/api/informer/getinformer/?hash=AKqncIMgTmb615" type="text/javascript"></script>
               
            </Helmet>
   
  
  </>
 
  );
 
  }
  
  export default GisMeteo