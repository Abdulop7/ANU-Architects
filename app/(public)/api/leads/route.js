import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: 'desc' // newest first
      }
    });

    return NextResponse.json(leads);

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { id, rating } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    if (!rating) {
      return NextResponse.json(
        { error: 'Rating (1-5) is required' },
        { status: 400 }
      );
    }

    // ✅ Validate rating is between 1-5
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.update({
      where: { id: id },
      data: {
        reviewdone: true,
        rating: rating // 👈 Save the rating (1-5)
      }
    });

    return NextResponse.json({
      message: 'Review submitted successfully!',
      lead
    });

  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

// DELETE lead(s)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Delete specific lead by ID
      await prisma.lead.delete({
        where: { id: parseInt(id) }
      });

      return NextResponse.json({
        message: `Lead with ID ${id} deleted successfully`
      });

    } else {
      // Delete ALL leads
      await prisma.lead.deleteMany({});

      return NextResponse.json({
        message: 'All leads deleted successfully'
      });
    }

  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to delete lead(s)' },
      { status: 500 }
    );
  }
}