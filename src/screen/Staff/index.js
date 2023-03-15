import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "../../components/icon";
import { DataTable } from "react-native-paper";

const data = [
  {
    id: 8,
    number: "ZAA8004",
    name: "Shalom Ogoziem",
    email: "shalom123@gmail.com",
    department: "DevOps",
    salary: 12000,
  },
  // {
  //   id: 2,
  //   number: "ZAB2008",
  //   name: "Datubo Harry",
  //   email: "danielnary@gmail.com",
  //   department: "Adim",
  //   salary: 90000,
  // },
  {
    id: 3,
    number: "ZAC3001",
    name: "Rejoice Daniels",
    email: "rejoice123@gmail.com",
    department: "Software",
    salary: 70000,
  },
  {
    id: 4,
    number: "ZAD4001",
    name: "Anthony Iyaji",
    email: "iyajianthony@gmail.com",
    department: "Admin",
    salary: 20000,
  },
  {
    id: 5,
    number: "ZAE501",
    name: "Refilwe Segele",
    email: "segeleRf12@gmail.com",
    department: "Sakerting",
    salary: 20000,
  },
  {
    id: 6,
    number: "ZAF6002",
    name: "Joseph Akpan",
    email: "joseph123@gmail.com",
    department: "HR",
    salary: 40000,
  },
  {
    id: 7,
    number: "ZAF7005",
    name: "Linda Hedhli",
    email: "linda123@gmail.com",
    department: "HR",
    salary: 40000,
  },
];
class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      itemsPerPage: data[0],
    };
  }

  render() {
    const from = this.state.page * this.state.itemsPerPage;
    const to = Math.min(
      (this.state.page + 1) * this.state.itemsPerPage,
      data.length
    );
    return (
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title sortDirection="descending">
              Number{" "}
            </DataTable.Title>
            <DataTable.Title> Name</DataTable.Title>
            <DataTable.Title>Email</DataTable.Title>
            <DataTable.Title>Deparment</DataTable.Title>
            <DataTable.Title>Salary</DataTable.Title>
            <DataTable.Title>Action</DataTable.Title>
          </DataTable.Header>
          {data.map((staff) => {
            return (
              <DataTable.Row key={staff.id}>
                <DataTable.Cell>{staff.number}</DataTable.Cell>
                <DataTable.Cell>{staff.name}</DataTable.Cell>
                <DataTable.Cell>{staff.email}</DataTable.Cell>
                <DataTable.Cell>{staff.department}</DataTable.Cell>
                <DataTable.Cell>{staff.salary}</DataTable.Cell>
                <DataTable.Cell>
                  <TouchableOpacity>
                    <Icon
                      name="delete"
                      type={"MaterialCommunityIcons"}
                      size={15}
                      color={"red"}
                      style={styles.icons}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("EditStaff")}
                  >
                    <Icon
                      name="edit"
                      type={"AntDesign"}
                      size={15}
                      color={"green"}
                      style={styles.icons}
                    />
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}

          <DataTable.Pagination
            page={this.state.data}
            numberOfPages={3}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
            itemsPerPage={data}
            setItemsPerPage={data}
            showFastPagination
            optionsLabel={"Rows per page"}
          />
        </DataTable>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => {
            this.props.navigation.navigate("AddStaff");
          }}
        >
          <Icon
            name={"user-plus"}
            color={"white"}
            type={"Feather"}
            style={{ fontSize: 25 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Staff;
