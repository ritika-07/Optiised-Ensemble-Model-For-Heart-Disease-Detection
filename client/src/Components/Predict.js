import React, {useState} from 'react';
import "../App.css";
import { Layout, InputNumber, Row, Col, Radio, Space, Button, Modal } from 'antd';
import "antd/dist/antd.css";


function Predict() {

  const { Content} = Layout;

  const [age, setAge]= useState(18)
  const [sex, setSex]= useState(1)
  const [cp, setCp]= useState(0)
  const [trestbps, setTrestbps]= useState(120)
  const [chol, setChol]= useState(205)
  const [fbs, setFbs]= useState(1)
  const [restecg, setRestecg]= useState(0)
  const [thalach, setThalach]= useState(100)
  const [exang, setExang]= useState(1)
  const [oldpeak, setOldpeak]= useState(0.0)
  const [slope, setSlope]= useState(1)
  const [ca, setCa]= useState(0)
  const [thal, setThal]= useState(1)

  const [output, setOutput]= useState(0)
  const [modalvis, setModalvis]= useState(false)

  return (
    <Content style={{ padding: '0 50px', margin: '50px 0 0 0' }}>
    <div className="site-layout-content">

    <Row>
      <Col span={24}>
        <div class="typewriter">
        <h2> Please Enter Your Readings To Get Started! </h2>
        </div>
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Age: </h3>
      </Col>

      <Col span={8}>
        <Space>
        <InputNumber
        defaultValue={18}
        min={18}
        max={100}
        value={age}
        onChange={(e)=> setAge(e)}
        />
        </Space>
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Sex:</h3>
      </Col>

      <Col span={8}>
        <Radio.Group
          options={[
            { label: 'Female', value: 0 },
            { label: 'Male', value: 1 }
          ]}
          onChange={(e)=> setSex(e.target.value)}
          value={sex}
          optionType="button"
        />
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Chest Pain Type: </h3>
      </Col>

      <Col span={12}>
        <Radio.Group
          options={[
            { label: 'Typical Angina', value: 0 },
            { label: 'Atypical Angina', value: 1 },
            { label: 'Non-anginal Pain', value: 2 },
            { label: 'Asymptomatic', value: 3 },
          ]}
          onChange={(e)=> setCp(e.target.value)}
          value={cp}
          optionType="button"
        />
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Resting BP: </h3>
      </Col>

      <Col span={12}>
        <Space>
        <InputNumber
        defaultValue={120}
        min={0}
        max={300}
        formatter={value => `${value} mm Hg`}
        parser={value => value.replace(' mm Hg', '')}
        onChange={(e)=> setTrestbps(e)}
        />
        </Space>
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Cholesterol: </h3>
      </Col>
    
    <Col span={12}>
      <Space>
      <InputNumber
      defaultValue={205}
      min={0}
      max={300}
      formatter={value => `${value} mg/dl`}
      parser={value => value.replace(' mg/dl', '')}
      onChange={(e)=> setChol(e)}
      />
      </Space>
    </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Fasting Blood Sugar: </h3>
      </Col>

    <Col span={12}>
      <Radio.Group
        options={[
          { label: '> 120 mg/dl', value: 1 },
          { label: '< 120 mg/dl', value: 0 },
        ]}
        onChange={(e)=> setFbs(e.target.value)}
        value={fbs}
        optionType="button"
      />
    </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Resting ECG Results: </h3>
      </Col>

      <Col span={12}>
        <Radio.Group
          options={[
            { label: 'Normal', value: 0 },
            { label: 'ST-T wave abnormality', value: 1 },
            { label: 'Left ventricular hypertrophy', value: 2 },
          ]}
          onChange={(e)=> setRestecg(e.target.value)}
          value={restecg}
          optionType="button"
        />
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Maximum Heart Rate: </h3>
      </Col>

      <Col span={12}>
        <Space>
        <InputNumber
        defaultValue={100}
        min={60}
        max={200}
        value={thalach}
        onChange={(e)=> setThalach(e)}
        />
        </Space>
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Exercise Induced Angina: </h3>
      </Col>

      <Col span={12}>
        <Radio.Group
          options={[
            { label: 'Yes', value: 1 },
            { label: 'No', value: 0 },
          ]}
          onChange={(e)=> setExang(e.target.value)}
          value={exang}
          optionType="button"
        />
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>ST Depression: </h3>
      </Col>

      <Col span={12}>
        <Space>
        <InputNumber
        defaultValue={0.0}
        min={0}
        max={10}
        value={oldpeak}
        onChange={(e)=> setOldpeak(e)}
        />
        </Space>
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>ST Slope: </h3>
      </Col>

      <Col span={12}>
      <Radio.Group
        options={[
          { label: 'Upsloping', value: 1 },
          { label: 'Flat', value: 2 },
          { label: 'Downsloping', value: 3 },
        ]}
        onChange={(e)=> setSlope(e.target.value)}
        value={slope}
        optionType="button"
      />
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Flourosopy Results:</h3>
      </Col>

      <Col span={12}>
        <Radio.Group
          options={[
            { label: '0 major vessels', value: 0 },
            { label: '1 major vessels', value: 1 },
            { label: '2 major vessels', value: 2 },
            { label: '3 major vessels', value: 3 }
          ]}
          onChange={(e)=> setCa(e.target.value)}
          value={ca}
          optionType="button"
        />
      </Col>
    </Row>

    <Row>
      <Col span={6}>
        <h3>Thalassemia:</h3>
      </Col>

      <Col span={8}>
        <Radio.Group
          options={[
            { label: 'Normal', value: 1 },
            { label: 'Fixed Defect', value: 2 },
            { label: 'Irreversible Defect', value: 3 },
          ]}
          onChange={(e)=> setThal(e.target.value)}
          value={thal}
          optionType="button"
        />
      </Col>
    </Row>

    <Row>

      <Col span={6}>
        <Button type="primary"
        block
        onClick={ async () => {
          const data= {
            "age": age,
            "sex": sex,
            "cp": cp,
            "trestbps": trestbps,
            "chol": chol,
            "fbs": fbs,
            "restecg": restecg,
            "thalach": thalach,
            "exang": exang,
            "oldpeak": oldpeak,
            "slope": slope,
            "ca": ca,
            "thal": thal
        }
        console.log("Raw data"+data)
        console.log("Data being sent: "+JSON.stringify(data))
        const response = await fetch ('/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        if (response.ok) {
          console.log('Response worked!')
          response.json().then(
            data => {
              setOutput(data['output'])
              console.log(output)
            }
          )
        }
        setModalvis(true)
        }}
        >Predict</Button>

        <Modal
          title="Prediction Results"
          centered
          visible={modalvis}
          onOk={() => setModalvis(false)}
          onCancel={() => setModalvis(false)}
        >
          <img src={require('../heartgif.gif')} id="modalimg"></img>
          <p>According to the optimised ensemble model,</p>
          {output==='1' ? <p style={{color: "red"}}><b>The patient is at risk.</b></p>:
          <p style={{color: "green"}}><b>The patient is NOT at risk.</b></p>}
          <p><i>Please refer the EDA tab to understand the dataset and the Analyse tab to understand the performance metrics used.</i></p>
        </Modal>
      </Col>
    </Row>  

    </div>
    </Content>
  );
}

export default Predict;
