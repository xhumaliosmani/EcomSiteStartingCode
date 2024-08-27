import { getServerSession } from 'next-auth/next'
import {NextResponse} from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import bcrypt from 'bcryptjs'
import User from '@/utils/models/User'
import connect from '@/utils/config/dbConnection'

