import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart, ProgressChart, BarChart } from "react-native-chart-kit";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/MaterialIcons";
import { abs } from "react-native-reanimated";
import { robotoWeights, material } from "react-native-typography";
import Gpa from "./Gpa";
import { connect } from "react-redux";
import { modifyAvgSub } from "../src/actions/index";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

// maths : 4, phy:3, mech:3 , chem:2 , eg:2 , english:1

const GpaSubjects = (props) => {
  if (props.sem == 1) {
    var [gpaMaths, setgpaMaths] = useState(10);
    if (gpaMaths > 10) {
      gpaMaths = 10;
    }
    if (gpaMaths < 4) {
      gpaMaths = 4;
    }
    var [gpaPhysics, setgpaPhysics] = useState(10);
    if (gpaPhysics > 10) {
      gpaPhysics = 10;
    }
    if (gpaPhysics < 4) {
      gpaPhysics = 4;
    }
    var [gpaChemistry, setgpaChemistry] = useState(10);
    if (gpaChemistry > 10) {
      gpaChemistry = 10;
    }
    if (gpaChemistry < 4) {
      gpaChemistry = 4;
    }
    var [gpaMechanics, setgpaMechanics] = useState(10);
    if (gpaMechanics > 10) {
      gpaMechanics = 10;
    }
    if (gpaMechanics < 4) {
      gpaMechanics = 4;
    }
    var [gpaDrawing, setgpaDrawing] = useState(10);
    if (gpaDrawing > 10) {
      gpaDrawing = 10;
    }
    if (gpaDrawing < 4) {
      gpaDrawing = 4;
    }
    var [gpaEnglish, setgpaEnglish] = useState(10);
    if (gpaEnglish > 10) {
      gpaEnglish = 10;
    }
    if (gpaEnglish < 4) {
      gpaEnglish = 4;
    }
    var avgSubjects =
      (gpaMaths * 4 +
        gpaPhysics * 3 +
        gpaMechanics * 3 +
        gpaChemistry * 2 +
        gpaDrawing * 2 +
        gpaEnglish) /
      15;
    return (
      <View style={styles.background}>
        <View style={styles.card}>
          <Text style={styles.text}>Applied Mathematics I : {gpaMaths}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaMaths(gpaMaths + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaMaths(gpaMaths - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Applied Physics I : {gpaPhysics}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaPhysics(gpaPhysics + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaPhysics(gpaPhysics - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Applied Chemistry I : {gpaChemistry}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaChemistry(gpaChemistry + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaChemistry(gpaChemistry - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>
            Engineering Mechanics : {gpaMechanics}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaMechanics(gpaMechanics + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaMechanics(gpaMechanics - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Engineering Drawing : {gpaDrawing}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaDrawing(gpaDrawing + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaDrawing(gpaDrawing - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>English : {gpaEnglish}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaEnglish(gpaEnglish + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaEnglish(gpaEnglish - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gpa}>
          <Text style={styles.text}>
            Your GPA for Subjects: {avgSubjects.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  } else if (props.sem == 2) {
    var [gpaMaths, setgpaMaths] = useState(10);
    if (gpaMaths > 10) {
      gpaMaths = 10;
    }
    if (gpaMaths < 4) {
      gpaMaths = 4;
    }
    var [gpaPhysics, setgpaPhysics] = useState(10);
    if (gpaPhysics > 10) {
      gpaPhysics = 10;
    }
    if (gpaPhysics < 4) {
      gpaPhysics = 4;
    }
    var [gpaChemistry, setgpaChemistry] = useState(10);
    if (gpaChemistry > 10) {
      gpaChemistry = 10;
    }
    if (gpaChemistry < 4) {
      gpaChemistry = 4;
    }
    var [gpaMechanics, setgpaMechanics] = useState(10);
    if (gpaMechanics > 10) {
      gpaMechanics = 10;
    }
    if (gpaMechanics < 4) {
      gpaMechanics = 4;
    }
    var [gpaDrawing, setgpaDrawing] = useState(10);
    if (gpaDrawing > 10) {
      gpaDrawing = 10;
    }
    if (gpaDrawing < 4) {
      gpaDrawing = 4;
    }
    var [gpaEnglish, setgpaEnglish] = useState(10);
    if (gpaEnglish > 10) {
      gpaEnglish = 10;
    }
    if (gpaEnglish < 4) {
      gpaEnglish = 4;
    }
    var avgSubjects =
      (gpaMaths * 4 +
        gpaPhysics * 3 +
        gpaMechanics * 3 +
        gpaChemistry * 2 +
        gpaDrawing * 2 +
        gpaEnglish) /
      15;
    return (
      <View style={styles.background}>
        <View style={styles.card}>
          <Text style={styles.text}>Applied Mathematics I : {gpaMaths}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaMaths(gpaMaths + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaMaths(gpaMaths - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Applied Physics I : {gpaPhysics}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaPhysics(gpaPhysics + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaPhysics(gpaPhysics - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Applied Chemistry I : {gpaChemistry}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaChemistry(gpaChemistry + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaChemistry(gpaChemistry - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>
            Engineering Mechanics : {gpaMechanics}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaMechanics(gpaMechanics + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaMechanics(gpaMechanics - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Engineering Drawing : {gpaDrawing}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaDrawing(gpaDrawing + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaDrawing(gpaDrawing - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>English : {gpaEnglish}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => {
                setgpaEnglish(gpaEnglish + 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icons name="add" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => {
                setgpaEnglish(gpaEnglish - 1);
                props.subGpaAdd(avgSubjects.toFixed(2));
              }}
            >
              <Icon name="minus" size={19} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gpa}>
          <Text style={styles.text}>
            Your GPA for Subjects: {avgSubjects.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    sem: state.semReducer.semId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subGpaAdd: (avgSubjects) => dispatch(modifyAvgSub(avgSubjects)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GpaSubjects);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#181E28",
    //backgroundColor: "white",
    //justifyContent: "center",
    alignItems: "center",
  },
  btnExtraClass: {
    elevation: screenHeight / 90,
    width: screenWidth / 3,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "#2D3D64",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 40,
    alignItems: "center",
  },
  btnPlus: {
    flexDirection: "row",

    elevation: screenHeight / 90,
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "#7ED68A",
    justifyContent: "space-evenly",
    marginRight: screenWidth / 5,

    marginTop: screenHeight / 80,
    marginBottom: "1.5%",
    alignItems: "center",
  },
  btnMinus: {
    flexDirection: "row",
    elevation: screenHeight / 90,
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "#EFF577",
    justifyContent: "space-evenly",
    marginTop: screenHeight / 81,
    alignItems: "center",
    marginBottom: screenHeight / 400,
  },
  text: {
    color: "#ECF1F1",
    fontSize: screenHeight / 44,

    marginBottom: screenHeight / 400,
    marginTop: screenHeight / 600,
  },
  OutputContainer: {
    width: screenWidth - screenWidth / 10,
    elevation: 4,
    backgroundColor: "#1D2430",
    borderRadius: screenHeight / 51,
    marginTop: screenHeight / 20,
  },
  container: {
    backgroundColor: "#181E28",
    borderRadius: 0,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gpa: {
    position: "absolute",
    top: screenHeight / 1.22,
  },
  card: {
    width: screenWidth,
    //height: screenHeight / 8,
    elevation: 4,
    backgroundColor: "#1D2430",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: screenHeight / 51,
    marginTop: screenHeight / 80,
  },
});
