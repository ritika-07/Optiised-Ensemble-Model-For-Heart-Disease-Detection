import React from 'react';
import "../App.css";
import { Layout, Row, Col } from 'antd';
import "antd/dist/antd.css";

//Accuracy Bar Graph
import AccuracyBar from './AccuracyBar.js';

//Confusion Matrices
import CMLR from './ConfusionMatrix/CMLR.js';
import CMNB from './ConfusionMatrix/CMNB.js';
import CMRF from './ConfusionMatrix/CMRF.js';
import CMXGB from './ConfusionMatrix/CMXGB.js';
import CMKNN from './ConfusionMatrix/CMKNN.js';
import CMDT from './ConfusionMatrix/CMDT.js';
import CMSVM from './ConfusionMatrix/CMSVM.js';
import CMEnsemble from './ConfusionMatrix/CMEnsemble.js';

// Grouped Bar Graph
import GroupedBar from './GroupedBar.js';
import ROCLine from './ROCLine';

// Time Line Chart
import TimeLine from './TimeLine';

import SideBar from './SideBar.js';
import AnalyseNavbar from './AnalyseNavbar.js';

function Analyse() {
    const { Content } = Layout;
    
    return (
        
        <Content style={{ padding: '0 50px', margin: '50px 0 0 0' }}>
        <div className="site-layout-content">

        <div className="analyseBar">
        <AnalyseNavbar />
        </div>
          <section>
          <Row>         
          <h2 id='accuracy'>Accuracy</h2>
          </Row>
          <Row>
          <Col span={5}>
            <p>Accuracy is one metric for evaluating classification models. Informally, accuracy is the fraction of predictions our model got right.</p>
            <p><b>Accuracy Score = (TP+TN)/ (TP+FN+TN+FP). </b></p>
            <p>The model considers accuracy an important metric. It combines XGB and KNN to create an optimised ensemble approach since these models show highest accuracy. </p>
          </Col>
            <Col span={19}>
          <AccuracyBar />
          </Col>
          </Row> 
          </section>

          <section>
          <Row>
          <h2 id='cm'>Confusion Matrices</h2>
          </Row>
          <Row>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4>Logistic Regression</h4>
            </Row>
            <CMLR />
          </Col>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4 >Naive Bayes</h4>
            </Row>
            <CMNB />
          </Col>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4>Random Forest</h4>
            </Row>
            <CMRF />
          </Col>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4>Extreme Gradient Boost</h4>
            </Row>
            <CMXGB />
          </Col>
          </Row> 
          
          <Row>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4>K Nearest Neighbor</h4>
            </Row>
            <CMKNN />
          </Col>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4>Decision Tree</h4>
            </Row>
            <CMDT />
          </Col>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4>Support Vector Machine</h4>
            </Row>
            <CMSVM />
          </Col>
          <Col span={6}>
            <Row style={{'justifyContent': 'center'}}>
            <h4>Optimised Ensemble</h4>
            </Row>
            <CMEnsemble />
          </Col>
          </Row> 
          </section>

          <section><Row>
          <h2 id='roc'>ROC</h2>
          </Row>
          <Row>
          <Col span={5}>
            <p>The term ROC stands for Receiver Operating Characteristic.</p>
            <p>They show the connection between clinical sensitivity and specificity.</p>
            <p>The area under an ROC curve is a measure of the usefulness of a test, 
              where a greater area means a more useful test.</p>
            <p><b>OE has maximum AUROC with a score of 94%.</b></p>
          </Col>
            <Col span={19}>
            <ROCLine />
          </Col>
          </Row> 
          </section>

          <section>
          <Row>
          <h2 id='time'>Training Time</h2>
          </Row>
          <Row>
          <Col span={5}>
            <p>We see here that the training time for all models is quite fast that is, in milli seconds. Models having the random forest model as a sub component take realtively greater time for training.</p>
            <p>The prediction time is almost instantaneous for all models. </p>
              <p><b>Hence, facilitating real-time predictions.</b></p>
          </Col>
            <Col span={19}>
            <TimeLine />
          </Col>
          </Row>
          </section>

          <section>
          <Row>
          <h2 id='others'>Other Metrics</h2>
          </Row>
          <Row>
          <Col span={5}>
            <p>Precision is the ratio of the correctly +ve labeled by our program to all correctly labeled.</p>
            <p><b>Precision = TP/(TP+FP)</b></p>
            <p>Recall is the ratio of the correctly +ve labeled by our program to all who are +ve in reality.</p>
            <p><b>Recall = TP/(TP+FN) </b></p>
            <p>F1 Score considers both precision and recall.</p>
            <p><b>F1 Score = 2*(Recall * Precision) / (Recall + Precision)</b></p>
          </Col>
            <Col span={19}>
          <GroupedBar />
          </Col>
          </Row> 
          </section>

        </div>
        </Content>
    );
}

export default Analyse;

