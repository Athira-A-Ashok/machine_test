import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import profile_root from "../Images/profile_root.jpg";
import Ramon from "../Images/Ramon.jpg";
import Dan from "../Images/Dan.jpg";
import stella from "../Images/stella.jpg";
import janet from "../Images/janet.jpg";
import isabelle from "../Images/isabelle.jpg";
import ivan from "../Images/ivan.jpg";
import sabina from "../Images/sabina.jpg";
import miles from "../Images/miles.jpg";
import angela from "../Images/angela.jpg";
import { US } from "country-flag-icons/react/3x2";
import { BR } from "country-flag-icons/react/3x2";
import { IT } from "country-flag-icons/react/3x2";
import "./Chart.css";

const Chart = () => (
  <Tree
    lineColor={"lightgrey"}
    label={
      <div>
        <img className="profile" src={profile_root} />
        <div className="parent-node">
          <ion-icon
            style={{ float: "right", color: "gray", paddingRight: "3px" }}
            name="ellipsis-horizontal-outline"
          ></ion-icon>
          <h6>Seth Williams</h6>
          <p>Managing Director</p>
        </div>
      </div>
    }
  >
    <TreeNode
      label={
        <div
          style={{
            border: "1px solid red",
            borderRadius: "14px",
            height: "25px",
            width: "70px",
            margin: "auto",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <BR
            style={{ height: "13px", width: "14px" }}
            title="United States"
            className="..."
          />
          Brazil
        </div>
      }
    >
      <TreeNode
        label={
          <div>
            <img className="profile" src={Ramon} />
            <div className="parent-node">
              <ion-icon
                style={{ float: "right", color: "gray", paddingRight: "3px" }}
                name="ellipsis-horizontal-outline"
              ></ion-icon>
              <h6>Ramon Harris</h6>
              <p>Regional Director</p>
            </div>
          </div>
        }
      >
        <TreeNode
          label={
            <div>
              <img className="profile" src={janet} />
              <div className="parent-node">
                <ion-icon
                  style={{ float: "right", color: "gray", paddingRight: "3px" }}
                  name="ellipsis-horizontal-outline"
                ></ion-icon>
                <h6>Janet Parks</h6>
                <p>CEO</p>
                <button className="retail">Retail</button>
              </div>
            </div>
          }
        />
        <TreeNode
          label={
            <div>
              <img className="profile" src={isabelle} />
              <div className="parent-node">
                <ion-icon
                  style={{ float: "right", color: "gray", paddingRight: "3px" }}
                  name="ellipsis-horizontal-outline"
                ></ion-icon>
                <h6>Isabelle Kaif</h6>
                <p>CEO</p>
                <button className="retail">Retail</button>
              </div>
            </div>
          }
        />
      </TreeNode>
    </TreeNode>
    <TreeNode
      label={
        <div
          style={{
            border: "1px solid red",
            borderRadius: "14px",
            height: "25px",
            width: "70px",
            margin: "auto",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <US
            style={{ height: "12px", width: "12px" }}
            title="United States"
            className="..."
          />
          USA
        </div>
      }
    >
      <TreeNode
        label={
          <div>
            <img className="profile" src={Dan} />
            <div className="parent-node">
              <ion-icon
                style={{ float: "right", color: "gray", paddingRight: "3px" }}
                name="ellipsis-horizontal-outline"
              ></ion-icon>
              <h6>Dan Morgan</h6>
              <p>Regional Director</p>
            </div>
          </div>
        }
      >
        <TreeNode
          label={
            <div>
              <img className="profile" src={ivan} />
              <div className="parent-node">
                <ion-icon
                  style={{ float: "right", color: "gray", paddingRight: "3px" }}
                  name="ellipsis-horizontal-outline"
                ></ion-icon>
                <h6>Ivan Toney</h6>
                <p>CEO</p>
                <button className="retail">Retail</button>
              </div>
            </div>
          }
        />
        <TreeNode
          label={
            <div>
              <img className="profile" src={sabina} />
              <div className="parent-node">
                <ion-icon
                  style={{ float: "right", color: "gray", paddingRight: "3px" }}
                  name="ellipsis-horizontal-outline"
                ></ion-icon>
                <h6>Sabrina Francis</h6>
                <p>CEO</p>
                <button className="retail">Retail</button>
              </div>
            </div>
          }
        />
      </TreeNode>
    </TreeNode>
    <TreeNode
      label={
        <div
          style={{
            border: "1px solid red",
            borderRadius: "14px",
            height: "25px",
            width: "70px",
            margin: "auto",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <IT
            style={{ height: "13px", width: "14px" }}
            title="United States"
            className="..."
          />
          Italy
        </div>
      }
    >
      <TreeNode
        label={
          <div>
            <img className="profile" src={stella} />
            <div className="parent-node">
              <ion-icon
                style={{ float: "right", color: "gray", paddingRight: "3px" }}
                name="ellipsis-horizontal-outline"
              ></ion-icon>
              <h6>Stella Nelson</h6>
              <p>Regional Director</p>
            </div>
          </div>
        }
      >
        <TreeNode
          label={
            <div>
              <img className="profile" src={miles} />
              <div className="parent-node">
                <ion-icon
                  style={{ float: "right", color: "gray", paddingRight: "3px" }}
                  name="ellipsis-horizontal-outline"
                ></ion-icon>
                <h6>Miles Clark</h6>
                <p>Chief Administrator</p>
                <button className="retail">Retail</button>
              </div>
            </div>
          }
        />
        <TreeNode
          label={
            <div>
              <img className="profile" src={angela} />
              <div className="parent-node">
                <ion-icon
                  style={{ float: "right", color: "gray", paddingRight: "3px" }}
                  name="ellipsis-horizontal-outline"
                ></ion-icon>
                <h6>Angela Howard</h6>
                <p>Chief Administrator</p>
                <button className="retail">Retail</button>
              </div>
            </div>
          }
        />
      </TreeNode>
    </TreeNode>
  </Tree>
);

export default Chart;
