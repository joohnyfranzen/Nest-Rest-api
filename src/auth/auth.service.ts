import { Injectable } from "@nestjs/common";
import { PrismaClient } from '@prisma/client'
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {
        
    }

    signin() {
        return { msg: 'I am signed in'};
    }

    signup() {
        return { msg: 'I am signed up'};
    }
}