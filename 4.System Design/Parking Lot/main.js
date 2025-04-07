"use strict";
var VehicleType;
(function (VehicleType) {
    VehicleType["CAR"] = "CAR";
    VehicleType["BIKE"] = "BIKE";
    VehicleType["HANDICAPPED"] = "HANDICAPPED";
})(VehicleType || (VehicleType = {}));
class Vehicle {
    constructor(licensePlate, type) {
        this.licensePlate = licensePlate;
        this.type = type;
    }
}
class ParkingSpot {
    constructor(id, type, isOccupied = false, vehicle = null) {
        this.id = id;
        this.type = type;
        this.isOccupied = isOccupied;
        this.vehicle = vehicle;
    }
    parkVehicle(vehicle) {
        if (this.isOccupied)
            return false;
        this.vehicle = vehicle;
        this.isOccupied = true;
        return true;
    }
    releaseVehicle() {
        if (!this.isOccupied)
            return false;
        this.vehicle = null;
        this.isOccupied = false;
        return true;
    }
}
class ParkingFloor {
    constructor(floorNumber, spotCount) {
        this.floorNumber = floorNumber;
        this.spots = [];
        for (let i = 0; i < spotCount; i++) {
            let parkingSpot = null;
            if (i % 2 == 0)
                parkingSpot = new ParkingSpot(i, VehicleType.BIKE);
            else if (i % 3 == 0)
                parkingSpot = new ParkingSpot(i, VehicleType.HANDICAPPED);
            else
                parkingSpot = new ParkingSpot(i, VehicleType.CAR);
            this.spots.push(parkingSpot);
        }
    }
    findAvailableSpot(type) {
        return (this.spots.find((spot) => !spot.isOccupied && spot.type === type) || null);
    }
}
class Ticket {
    constructor(vehicle, spot, entryTime) {
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = entryTime;
        this.hours = 0;
    }
    releaseVehicle() {
        this.exitTime = new Date();
        this.spot.releaseVehicle();
        this.hours = Math.ceil((this.exitTime.getTime() - this.entryTime.getTime()) / (1000 * 60 * 60));
    }
    calculateCost() {
        const rate = ParkingLot.getParkingRate(this.spot.type);
        return this.hours * rate;
    }
}
class ParkingLot {
    constructor(floorCount, spotsPerFloor) {
        this.floors = [];
        this.tickets = new Map();
        for (let i = 0; i < floorCount; i++) {
            this.floors.push(new ParkingFloor(i, spotsPerFloor));
        }
    }
    parkVehicle(vehicle) {
        for (const floor of this.floors) {
            const spot = floor.findAvailableSpot(vehicle.type);
            if (spot) {
                spot.parkVehicle(vehicle);
                const ticket = new Ticket(vehicle, spot, new Date());
                this.tickets.set(vehicle.licensePlate, ticket);
                return ticket;
            }
        }
        return null;
    }
    releaseVehicle(licensePlate) {
        const ticket = this.tickets.get(licensePlate);
        if (!ticket)
            return null;
        ticket.releaseVehicle();
        this.tickets.delete(licensePlate);
        return ticket.calculateCost();
    }
    checkAvailability(type) {
        return this.floors.reduce((count, floor) => count +
            floor.spots.filter((spot) => !spot.isOccupied && spot.type === type)
                .length, 0);
    }
    static getParkingRate(type) {
        if (type == VehicleType.CAR)
            return 10;
        if (type == VehicleType.BIKE)
            return 7;
        return 5;
    }
}
// Example Usage
const parkingLot = new ParkingLot(3, 10);
const vehicle1 = new Vehicle("ABC123", VehicleType.CAR);
const ticket = parkingLot.parkVehicle(vehicle1);
console.log("Ticket Issued:", ticket);
setTimeout(() => {
    const cost = parkingLot.releaseVehicle("ABC123");
    console.log("Parking Cost:", cost);
}, 5000);
