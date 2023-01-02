from flask import Flask, jsonify
from sklearn.preprocessing import StandardScaler
import joblib

#ML Models
from xgboost import XGBClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import VotingClassifier

#loading dataset
import pandas as pd
import numpy as np

# data splitting
from sklearn.model_selection import train_test_split

#To get POST data
from flask import request

app=Flask(__name__)

@app.route("/check")
def check():
    print("CALLED CHECK: ")
    return jsonify({"Output": "Successfully called check"})

@app.route("/predict", methods=["POST"])
def predict():
    age=float(request.json['age'])
    sex=float(request.json['sex'])
    cp=float(request.json['cp'])
    trestbps=float(request.json['trestbps'])
    chol=float(request.json['chol'])
    fbs=float(request.json['fbs'])
    restecg=float(request.json['restecg'])
    thalach=float(request.json['thalach'])
    exang=float(request.json['exang'])
    oldpeak=float(request.json['oldpeak'])
    slope=float(request.json['slope'])
    ca=float(request.json['ca'])
    thal=float(request.json['thal'])
    print("CALLED: ")
    values=[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]
    print(values)


    #values= [58.0, 0.0, 0.0, 100.0, 248.0, 0.0, 0.0, 122.0, 0.0, 1.0, 1.0, 0.0, 2.0]
    ensemble=joblib.load('./model.pkl')

    #Creating Pandas Series
    indexes=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'] 
    data=pd.Series(values, index=indexes)

    #Scaling the data
    df = pd.read_csv('./heart_disease_uci.csv')
    y = df["target"]
    X = df.drop('target',axis=1)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state = 0)
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    data = scaler.transform(data.values.reshape(1,-1))

    #Prediction
    output=ensemble.predict(data)
    output=str(output[0])
    print({"output": output})
    return jsonify({"output": output})


if __name__=="__main__":
    app.run(debug=True)