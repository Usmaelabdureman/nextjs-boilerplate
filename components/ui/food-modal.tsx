'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

interface FoodModalProps {
  onSubmit: (data: FoodFormData) => void;
}

export interface FoodFormData {
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: 'Open Now' | 'Closed';
}

export function FoodModal({ onSubmit }: FoodModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FoodFormData>({
    food_name: '',
    food_rating: 0,
    food_image: '',
    restaurant_name: '',
    restaurant_logo: '',
    restaurant_status: 'Open Now',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FoodFormData, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FoodFormData, string>> = {};

    if (!formData.food_name) {
      newErrors.food_name = 'Food Name is required';
    }

    if (!formData.food_rating || isNaN(formData.food_rating)) {
      newErrors.food_rating = 'Food Rating must be a number';
    }

    if (!formData.food_image) {
      newErrors.food_image = 'Food Image URL is required';
    }

    if (!formData.restaurant_name) {
      newErrors.restaurant_name = 'Restaurant Name is required';
    }

    if (!formData.restaurant_logo) {
      newErrors.restaurant_logo = 'Restaurant Logo URL is required';
    }

    if (!['Open Now', 'Closed'].includes(formData.restaurant_status)) {
      newErrors.restaurant_status = "Restaurant Status must be 'Open Now' or 'Closed'";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const AddFood = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setOpen(false);
      setFormData({
        food_name: '',
        food_rating: 0,
        food_image: '',
        restaurant_name: '',
        restaurant_logo: '',
        restaurant_status: 'Open Now',
      });
    }
  };

  const handleChange = (field: keyof FoodFormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">

          Add Food
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Food</DialogTitle>
        </DialogHeader>
        <form onSubmit={AddFood} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="food_name">Food Name</Label>
            <Input
              id="food_name"
              name="food_name"
              value={formData.food_name}
              onChange={(e) => handleChange('food_name', e.target.value)}
              className="col-span-3"
            />
            {errors.food_name && (
              <p id="food-name-error" className="text-sm text-red-500">
                {errors.food_name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="food_rating">Food Rating</Label>
            <Input
              id="food_rating"
              name="food_rating"
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={formData.food_rating}
              onChange={(e) => handleChange('food_rating', parseFloat(e.target.value))}
            />
            {errors.food_rating && (
              <p id="food-rating-error" className="text-sm text-red-500">
                {errors.food_rating}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="food_image">Food Image URL</Label>
            <Input
              id="food_image"
              name="food_image"
              value={formData.food_image}
              onChange={(e) => handleChange('food_image', e.target.value)}
            />
            {errors.food_image && (
              <p id="food-image-error" className="text-sm text-red-500">
                {errors.food_image}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurant_name">Restaurant Name</Label>
            <Input
              id="restaurant_name"
              name="restaurant_name"
              value={formData.restaurant_name}
              onChange={(e) => handleChange('restaurant_name', e.target.value)}
            />
            {errors.restaurant_name && (
              <p id="restaurant-name-error" className="text-sm text-red-500">
                {errors.restaurant_name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurant_logo">Restaurant Logo URL</Label>
            <Input
              id="restaurant_logo"
              name="restaurant_logo"
              value={formData.restaurant_logo}
              onChange={(e) => handleChange('restaurant_logo', e.target.value)}
            />
            {errors.restaurant_logo && (
              <p id="restaurant-logo-error" className="text-sm text-red-500">
                {errors.restaurant_logo}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurant_status">Restaurant Status</Label>
            <Select
              name="restaurant_status"
              value={formData.restaurant_status}
              onValueChange={(value) => handleChange('restaurant_status', value)}
            >
              <SelectTrigger id="restaurant_status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Open Now">Open Now</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            {errors.restaurant_status && (
              <p id="restaurant-status-error" className="text-sm text-red-500">
                {errors.restaurant_status}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}