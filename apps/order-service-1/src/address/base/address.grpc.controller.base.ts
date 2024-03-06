/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { AddressService } from "../address.service";
import { AddressCreateInput } from "./AddressCreateInput";
import { AddressWhereInput } from "./AddressWhereInput";
import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { AddressFindManyArgs } from "./AddressFindManyArgs";
import { AddressUpdateInput } from "./AddressUpdateInput";
import { Address } from "./Address";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

export class AddressGrpcControllerBase {
  constructor(protected readonly service: AddressService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Address })
  @GrpcMethod("AddressService", "createAddress")
  async createAddress(
    @common.Body() data: AddressCreateInput
  ): Promise<Address> {
    return await this.service.createAddress({
      data: data,
      select: {
        address_1: true,
        address_2: true,
        city: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Address] })
  @ApiNestedQuery(AddressFindManyArgs)
  @GrpcMethod("AddressService", "addresses")
  async addresses(@common.Req() request: Request): Promise<Address[]> {
    const args = plainToClass(AddressFindManyArgs, request.query);
    return this.service.addresses({
      ...args,
      select: {
        address_1: true,
        address_2: true,
        city: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AddressService", "address")
  async address(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    const result = await this.service.address({
      where: params,
      select: {
        address_1: true,
        address_2: true,
        city: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AddressService", "updateAddress")
  async updateAddress(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() data: AddressUpdateInput
  ): Promise<Address | null> {
    try {
      return await this.service.updateAddress({
        where: params,
        data: data,
        select: {
          address_1: true,
          address_2: true,
          city: true,
          createdAt: true,
          id: true,
          state: true,
          updatedAt: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AddressService", "deleteAddress")
  async deleteAddress(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    try {
      return await this.service.deleteAddress({
        where: params,
        select: {
          address_1: true,
          address_2: true,
          city: true,
          createdAt: true,
          id: true,
          state: true,
          updatedAt: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/customers")
  @ApiNestedQuery(CustomerFindManyArgs)
  @GrpcMethod("AddressService", "findManyCustomers")
  async findManyCustomers(
    @common.Req() request: Request,
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Customer[]> {
    const query = plainToClass(CustomerFindManyArgs, request.query);
    const results = await this.service.findCustomers(params.id, {
      ...query,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customers")
  @GrpcMethod("AddressService", "connectCustomers")
  async connectCustomers(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        connect: body,
      },
    };
    await this.service.updateAddress({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customers")
  @GrpcMethod("AddressService", "updateCustomers")
  async updateCustomers(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        set: body,
      },
    };
    await this.service.updateAddress({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customers")
  @GrpcMethod("AddressService", "disconnectCustomers")
  async disconnectCustomers(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        disconnect: body,
      },
    };
    await this.service.updateAddress({
      where: params,
      data,
      select: { id: true },
    });
  }
}
