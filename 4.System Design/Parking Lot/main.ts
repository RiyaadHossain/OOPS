/*
  * FeedBack: Taking Enum voilates open / close principle(when you need to add new vehicle type)
  Solution: Use Vehicle as abstract class and then derive the base class for each type of vehicle
*/
enum VehicleType {
  CAR = "CAR",
  BIKE = "BIKE",
  HANDICAPPED = "HANDICAPPED",
}

class Vehicle {
  constructor(public licensePlate: string, public type: VehicleType) {}
}

class ParkingSpot {
  constructor(
    public id: number,
    public type: VehicleType,
    public isOccupied: boolean = false,
    public vehicle: Vehicle | null = null
  ) {}

  parkVehicle(vehicle: Vehicle): boolean {
    if (this.isOccupied) return false;
    this.vehicle = vehicle;
    this.isOccupied = true;
    return true;
  }

  releaseVehicle(): boolean {
    if (!this.isOccupied) return false;
    this.vehicle = null;
    this.isOccupied = false;
    return true;
  }
}

class ParkingFloor {
  spots: ParkingSpot[] = [];

  constructor(public floorNumber: number, spotCount: number) {
    for (let i = 0; i < spotCount; i++) {
      let parkingSpot = null;
      if (i % 2 == 0) parkingSpot = new ParkingSpot(i, VehicleType.BIKE);
      else if (i % 3 == 0)
        parkingSpot = new ParkingSpot(i, VehicleType.HANDICAPPED);
      else parkingSpot = new ParkingSpot(i, VehicleType.CAR);

      this.spots.push(parkingSpot);
    }
  }

  findAvailableSpot(type: VehicleType): ParkingSpot | null {
    return (
      this.spots.find((spot) => !spot.isOccupied && spot.type === type) || null
    );
  }
}

class Ticket {
  public exitTime?: Date;
  public hours: number = 0;
  constructor(
    public vehicle: Vehicle,
    public spot: ParkingSpot,
    public entryTime: Date
  ) {}

  releaseVehicle() {
    this.exitTime = new Date();
    this.spot.releaseVehicle();
    this.hours = Math.ceil(
      (this.exitTime.getTime() - this.entryTime.getTime()) / (1000 * 60 * 60)
    );
  }

  calculateCost(): number {
    const rate = ParkingLot.getParkingRate(this.spot.type);
    return this.hours * rate;
  }
}

class ParkingLot {
  floors: ParkingFloor[] = [];
  tickets: Map<string, Ticket> = new Map();

  constructor(floorCount: number, spotsPerFloor: number) {
    for (let i = 0; i < floorCount; i++) {
      this.floors.push(new ParkingFloor(i, spotsPerFloor));
    }
  }

  parkVehicle(vehicle: Vehicle): Ticket | null {
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

  releaseVehicle(licensePlate: string): number | null {
    const ticket = this.tickets.get(licensePlate);
      if (!ticket) return null;
      
    ticket.releaseVehicle();
    this.tickets.delete(licensePlate);
    return ticket.calculateCost();
  }

  checkAvailability(type: VehicleType): number {
    return this.floors.reduce(
      (count, floor) =>
        count +
        floor.spots.filter((spot) => !spot.isOccupied && spot.type === type)
          .length,
      0
    );
  }

  public static getParkingRate(type: VehicleType) {
    if (type == VehicleType.CAR) return 10;
    if (type == VehicleType.BIKE) return 7;
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
